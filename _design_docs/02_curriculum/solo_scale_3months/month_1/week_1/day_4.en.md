---
title: "Landing on the Root / ♭3 Over an Am One-Chord Backing Track"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
lang: en
---

# Day 4 — This Week's Finish Line: A Solo That "Lands"

## ① Theory / Explanation

Here's why we're doing this today. The real reason we've spent three days training your hands with sequences finally reveals itself today. Sequences were never the goal — they were the **<mark>runway</mark>.** No matter how fast you sprint down a runway, if you never land, it isn't really flying. Today, you finally learn to **<mark>land</mark>.** This is the heart of the entire three-month curriculum.

Just one core concept to nail down. When the Am chord rings out over the backing track, the notes that make up that chord are **<mark>A (root) · C (♭3) · E (5)</mark>.** We call these three notes "chord tones." Whether a solo sounds amateur or professional comes down to exactly one thing: **<mark>do you land on a chord tone when you end a phrase</mark>, or just stop anywhere?** Pour out scale notes and let the ending trail off — that's amateur. Hook the ending firmly on C or A and sing it with vibrato — that's professional. It really comes down to this one difference.

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

And of all the chord tones, **<mark>landing on C (♭3) is your best weapon</mark>.** Landing on the root A feels stable but a little predictable; landing on C, the ♭3, brings out that aching, minor-key color — "ah, this is minor" — instantly. The whole reason we've kept a green light on C for the past three days comes down to today. Now you're going to reach right into the flow of your solo, grab that C, and land on it.

## ② Visual Reference

This is the Am chord-tone map. Out of the five scale notes, only the **<mark>three chord tones (R · ♭3 · 5)</mark>** are marked. These three spots are your "landing zones." Aim especially for the green C (♭3).

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Here's an example landing lick. Bar 1 lands on the root A, bar 2 lands on the ♭3, C. The final landing note gets vibrato, and in bar 2 you <mark>slide into the target</mark>.

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 75)**
Run through this week's sequences (4-note, 3rd-interval) ascending and descending, once each, at a good clip. Your hands should already remember them. It's fine for warm-up to be short today — the real practice is ahead.

**10–20 min · Brain training (today's target = C·A, landing precision)**
No metronome — slowly get the landing lick above into your hands. Especially the end of bar 2: sliding from the 3rd string 7th fret (D) into the 5th fret (C) and singing it with vibrato. This <mark>"slide → land → vibrato" three-step combo</mark> is today's real gem. Repeat it 20 times to burn it into your body.

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20–40 min · Real-world feel — one-chord improv (Am backing track, BPM 70–80)**
Today's main event. Put on the backing track, and the rule is: **every 4 bars, you must <mark>land on a chord tone (C or A) and finish with vibrato</mark>.** In between, do whatever you want — sequences, free improv — but the ending must always land. Landing on the root A will feel easiest at first. Once you're comfortable, try <mark>landing on C (♭3) more than half the time</mark> — if you feel that moment where the sound suddenly turns aching and emotional, that's success. Like a call-and-response, try leaving one phrase open and closing the next one on C.

**40–50 min · Record & reflect (recommended)**
Definitely record today — this is the outcome of your whole week. Listen back and check: ① Did each phrase's ending catch on a chord tone, or did it just trail off? ② Is the vibrato on your landing notes even and pretty, or does it wobble awkwardly? ③ Was there a moment where <mark>the backing track's chord and your landing note "clicked" perfectly together</mark>? If there was — congratulations. You just opened the door to improvising for the first time.

**Today's finish line (= Week 1 graduation standard):** over the Am backing track, deliberately land a phrase on C (♭3) or A (root) at least 4 successful times, finishing each landing note with vibrato.

## ④ Tips / Common Mistakes

- **Letting go of the landing note too quickly.** This is today's biggest mistake. Once you land, stay at least one full beat and sing it with vibrato. The power of a landing comes from **staying put.** Brush past it, and that's not a landing — it's just passing through.
- **Doing vibrato with a finger shake instead of the wrist.** Vibrato isn't about shaking your finger — it's keeping your finger fretted while rotating your wrist just slightly, gently bending the pitch back and forth, like turning a doorknob. This week, just nail down one solid "slow and wide" vibrato.
- **A blurry landing pitch on the slide.** The 3rd string 7→5 slide has to stop exactly on the target fret (5) for the C to ring true. Overshoot or undershoot, and the landing turns fuzzy. Confirm your arrival point with your ears, not your eyes.
- **Landing on the root A every single time.** It's easy, so you'll keep running back to A — but you only really learn the minor color by landing on C (♭3). Today's goal is "deliberately landing on the scary C." Push through the awkwardness, and that becomes real skill.
