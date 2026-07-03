---
title: "Am↔C Switching Backing Jam — Land on E Over C, Land on C Over Am"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
lang: en
---

# Day 4 — Real Jam: Change Your Color Every Time the Chord Changes

## ① Theory / Explanation

Here's why we're doing this today: it's the day we bring everything you learned this week together into real music. Day 1, you understood relative keys; Day 2, you locked bright E into your hands; Day 3, you shuttled between C and E landings. Today we take all of that and unfold it as a jam (improvisation), not a drill — so that over a backing track, the color of your solo changes on its own every time the chord changes.

The rule is just two lines. If the chord is C, land on the bright 3rd, E. If the chord is Am, land on the dark b3, C. That's the whole conclusion of this week. What's fun is that E is C's 3rd and Am's 5th at the same time, and C is Am's b3 and C major's root at the same time. In other words, these two notes are a safe zone shared by both chords — you can hang out on either of them and never sound wrong. What actually decides whether the sound feels bright or dark is which one you choose to land on.

From today on, drop the idea of "playing a scale" and switch to "singing the chord." The fretboard shape is still just one shape. Let your hands play freely inside it, but keep your ears following the backing track's chords, and land squarely on that chord's target note (E or C) whenever you finish a phrase. Get this working, and you've just opened the first door to "singing on your own, on the fretboard."

## ② Visual Reference

This is a transition-landing map. Both chords' chord tones are packed into one picture. Over the C chord (C·E·G), E is the bright landing; over the Am chord (A·C·E), C is the dark landing. Check the labels too — you'll see E and C marked as the shared zone between the two chords.

```json
{
  "id": "m2.w6.d4.transition_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Transition target map — C chord lands on E (3), Am chord lands on C (b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

This is a sample transition-jam phrase. Measures 1–2 play around over the C chord and land on the bright E; measures 3–4 play around over the Am chord and land on the dark C. Feel how the landing's color splits apart the moment the chord changes.

```json
{
  "id": "m2.w6.d4.transition_jam_phrase",
  "type": "tab",
  "meta": {
    "title": "C -> Am transition jam — land E over C, land C over Am",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chord_target_jam",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 3", "highlight": true, "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "E — 5 (over Am)", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G — b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — b7 (over Am)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 88)**
With the metronome at 88, loosen up the fretboard with 3rd intervals, then slowly run through the transition-jam phrase above. No backing track yet — this is just your hands re-confirming where the C-landing (E) and Am-landing (C) live.

**10–20 min · Brain training (imprinting the chord-tone map)**
Turn off the metronome. On the transition-landing map above, fret only the C chord tones (C·E·G) and repeat "the bright landing is E" three times, then fret only the Am chord tones (A·C·E) and repeat "the dark landing is C" three times. Confirm with your hands that E and C both belong to the shared zone spanning both chords. You pass once you can fret both landing notes instantly with your eyes closed.

**20–40 min · Real-world improv (Am ↔ C switching backing track / BPM 84–88)**
Put on an "Am C backing track." Today isn't a drill — it's free jamming. Roll with 3rds or 4-note patterns, whatever feels comfortable, with just one rule: end your phrases on E over C, and on C over Am. Don't repeat the same lick every time — keep the landing fixed and fill the space in between differently each time. Aim to string two or three bars together in one breath, "speaking" through your instrument.

**40–50 min · Record & reflect (recommended)**
Record one minute of the jam with any recording app. Listen back and check three things: (1) did the landing's color switch along with the chord? (2) does the E landing actually sound bright, and the C landing actually sound dark? (3) did the vibrato on your ending note land cleanly, without a shaky wobble? Compare it with your recording from Day 1 of this week, and you'll really feel how much you've grown.

**Today's finish line:** Over the backing track, keep up with every chord switch without missing one — E landing over C, C landing over Am — for at least 16 bars. No copy-pasting the same lick; keep the landing fixed and fill the space differently every time.

## ④ Tips / Common Mistakes

- **Copy-pasting the same lick over and over.** Nailing the landing spot doesn't count if you attach the exact same phrase every single time — that's not improvisation yet. Fix the landing note, but change the path there every time. That's today's real goal.
- **Missing the chord change.** If you keep landing on the bright E even during Am, it feels a bit unmoored (not wrong exactly, just blurry). Memorize the backing track's progression first, and prepare for the switch one beat ahead.
- **Not distinguishing bright from dark.** E and C are both safe notes, so you'll never sound "wrong" even landing on them carelessly. But today, deliberately contrasting "bright vs. dark" is the whole point. Feel a different emotional color each time you land.
- **Cutting off the final note too quickly.** Let the E or C you land on ring out for a full half note, and finish with vibrato. That lingering resonance is the last thing separating "practice" from "music."
