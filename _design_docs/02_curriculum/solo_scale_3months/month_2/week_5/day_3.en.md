---
title: "Adding the 6th (F) — Resolving Through F to the 5th (E) and the 3rd (C)"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
lang: en
---

# Day 3 — The Last Bridge, 'F': Letting It Slide Down a Half-Step

## ① Theory / Explanation

Here's why we're doing this today. Yesterday we built a bridge called B between A and C. Today we add one last bridge, and A natural minor is complete: **<mark>F, the 6th</mark>.** F sits between the pentatonic's 5th (E) and ♭7 (G) — more precisely, it's the note **<mark>exactly a half-step above E</mark>.** And that "half-step above" is the whole point of today.

A half-step is <mark>the stickiest, most magnetic relationship on a guitar</mark>. F is a note that's practically desperate to be pulled down into the E right below it. So F's most natural resolution is **<mark>F → E (6th → 5th)</mark>**, sliding down a half-step. You'll feel today just how lyrical this sounds. If B was a bridge climbing up (to C), F is a bridge coming down (to E). Since they run in opposite directions, using them together gives your solos a rising-and-falling breath.

Of course, just like B yesterday, F is a **<mark>passing tone</mark>.** It's not an Am chord tone (A·C·E), so don't settle on it. There are two resolutions: the strongest is **F → E (5th)**, and going a bit further around, **F → E → D → C (♭3)**, eventually arriving at our home base C. Today F's coordinates in Box 1 are two spots: **5th string 8th fret** and **2nd string 6th fret.** Picture each sliding a half-step down into the E right below it (5th string 7th fret, 2nd string 5th fret).

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② Visual Reference

Alongside yesterday's B (green), today adds two spots of **<mark>F (6th, highlighted in green)</mark>** to the pentatonic — 5th string 8th fret, 2nd string 6th fret. Each is a bridge sliding a half-step down into the E (5th) right below it.

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Today's drill. Measure 1 repeats the **F → E (5th)** half-step resolution, and <mark>measure 2 flows **F → E → D → C (♭3)**, landing on our home base C</mark>.

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 85)**
Set the metronome to 85 and loosen up with everything so far — 3 minutes of the 3rd-interval sequence, 2 minutes of the A-B-C four-note run. Then spend 5 minutes on <mark>today's **F → E** half-step resolution</mark> (measure 1), slow. As you drop from F to E, let your fingers stay connected like they're "sliding." Drop to BPM 75 if it clumps.

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (today's target = the two F spots)**
Metronome off. In Box 1, find and fret **<mark>only F (6th)</mark>.** 5th string 8th fret, 2nd string 6th fret — just two spots. Every time you fret it, say out loud "pulled down a half-step to E," and add the motion of **<mark>sliding immediately down to E</mark>.** Pass when you can find both F's with your eyes closed and resolve each one to E.

**20–40 min · Real-world improv (Am one-chord backing, 80–85 BPM)**
Put on an "Am backing track." Today's mission: **<mark>every time you use F, resolve it to E or C</mark>.** Ending on F is off-limits. Try using yesterday's B (bridge going up) and today's F (bridge coming down) together in one phrase — something like "A-B-C … F-E," a rise and fall in one breath, and it already starts sounding like a solo.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of jamming with any recorder. Listen back and check one thing only: **<mark>does the F → E half-step sound "sticky" and connected</mark>, or does it snap apart?** If it snaps, you're lifting your finger too early. Hold F just a little longer, releasing right as E starts to ring. Slow down playback if you need to zoom in on that half-step moment by ear.

**Today's done-when:** you can find the two F spots with your eyes closed, resolve F → E smoothly five times or more, and resolve every F in the jam to E or C.

## ④ Tips / Common Mistakes

- **Settling on F.** Same issue as B. F isn't an Am chord tone, so lingering on it makes it float. Remember F is a magnet pulling down toward E, and always let it flow through.
- **Snapping F → E apart.** The magic of a half-step relationship is its "stickiness." Hold F just until right before E sounds, and that sticky quality comes alive. Lift your finger too early and they just become two separate, unrelated notes.
- **Finger placement.** On the 5th string, use finger 4 (pinky) for F (8th fret) and finger 3 for E (7th fret). On the 2nd string, finger 2 for F (6th fret) and finger 1 for E (5th fret). Stick to this placement and the half-step slide stays smooth.
- **Mixing up B and F's direction.** B resolves up (to C), F resolves down (to E) — opposite directions. If it's confusing, try a mnemonic: "B for boost (up), F for fall (down)."
