---
title: "Am↔C Tonal Center Switch Drill — Shuttling Between Two Resolutions in 4-Note Groups"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
lang: en
---

# Day 3 — Keep Your Hands Moving, Just Shuttle the Landing Between C and E

## ① Theory / Explanation

Here's why we're doing this today: it's time to build real, in-the-moment reflexes. On Day 1, you understood "same shape, different center"; on Day 2, you locked "landing on the bright 3rd, E" into your hands. But in a real song, the chords keep swinging back and forth — Am → C → Am → C. There's no time to change hand shapes on every switch. What you actually need is just one thing: the reflex to instantly swap your landing spot.

So today we do a back-and-forth shuttle drill. The weapon is a 4-note sequence (groups of four 16th notes). Roll through the fretboard non-stop in 4-note groups, and when the chord is Am, drop straight down onto the dark b3 (C); when it's C, land softly on the bright 3rd (E). Your fingering never changes — not even one degree. The only thing you're deciding in the moment is "where am I heading home right now."

Here's the really important point. Look at the two measures below — the note positions are almost identical. Your hand travels the exact same orbit. But measure 1 stops on C (Am's darkness), and measure 2 stops on E (C's brightness). Keep repeating this "same hand, different landing" pattern, and later, when a backing track suddenly switches chords, your hands will swap landing spots automatically. Today's the day we wire up that circuit.

## ② Visual Reference

This is a map of the two resolution notes. On the same fretboard, we've highlighted C (the Am-section landing = b3 / the C-section root) and E (the C-section landing = bright 3rd / the Am-section 5th). Picture yourself shuttling back and forth between these two dots.

```json
{
  "id": "m2.w6.d3.two_landing_map",
  "type": "scale_shape",
  "meta": {
    "title": "Two landing notes — C (Am b3 / C R) and E (C 3 / Am 5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

Here's the main shuttle drill. Measure 1 rolls through the 4-note pattern and lands on Am's dark C (b3); measure 2 rolls through the exact same hand orbit and lands on C's bright E (3rd). Notice just how similar the note positions in the two measures are.

```json
{
  "id": "m2.w6.d3.center_shift_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence drill — resolve to C (Am b3) then E (C bright 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (R in Am)", "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (b6)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (6 in C)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 88)**
With the metronome at 88, loosen up your hands with the 4-note sequence. Four 16th notes per beat ("da-da-da-da") should land exactly on each click. Don't worry about switching landings yet — just make sure the notes don't clump together. If your fingers can't keep up, drop to 82 for a bit, then build back up.

**10–20 min · Brain training (landing switch = C↔E)**
Keep the metronome on and alternate between the two measures above. Measure 1 (land on C) → measure 2 (land on E) → back to measure 1… repeat endlessly. Right before each landing, call out "dark (C)" or "bright (E)" in your head first, then let your hand follow. You pass once you've automated the feeling — same orbit, only the very last note changes — within 3 minutes.

**20–40 min · Real-world improv (Am ↔ C switching backing track / BPM 84–88)**
Put on an "Am C vamp backing track." Rule: roll the 4-note pattern non-stop, listen for the chord, and land on C for Am, E for C. The key is not missing the exact moment the chord switches. It's totally fine to react late at first — your reaction speed will speed up dramatically in just one day.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds, then play it back. Check point: did your landing note actually switch when the chord changed? If you landed on E during an Am section, or kept landing on C during a C section, you're still half a beat behind. Slow down playback and loop just the confusing spots, then next time, prepare for that chord change one beat ahead.

**Today's finish line:** Play the two-measure shuttle drill at BPM 88 without breaking. Over the backing track, switch accurately between C and E landings in sync with the chord changes for at least 8 bars.

## ④ Tips / Common Mistakes

- **Landing switch is half a beat late.** The most common mistake. If you decide your landing spot only after hearing the chord change, you're already too late. Memorize the backing track's chord progression ahead of time and prepare your next landing spot one beat early.
- **Getting tense and changing the hand orbit too.** All you need to change is the landing note — if you panic and shake up your whole fingering, the 4-note pattern falls apart. Keep repeating the mantra: "hands stay put, only the last note moves."
- **Not distinguishing the sound of a C landing from an E landing.** If you treat both landings as just "stopping," today's practice loses half its value. C should feel wistful, E should feel radiant — consciously feel that difference in emotional color as you land.
- **Bumping up the speed first.** Even if 88 feels frustratingly slow, stick with it. If you speed up before your switch accuracy hits 100%, that laggy reaction just gets baked in. Accuracy first — speed comes naturally through this week's jamming.
