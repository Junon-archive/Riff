---
title: "Locking In Pentatonic Box 5 + Connecting Box 4↔5↔the Octave"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
lang: en
---

# Day 2 — The Last Puzzle Piece: Box 5, and the Moment the Map Comes Full Circle

## ① Theory / Explanation

Here's why we're doing this today. Yesterday you moved into Box 4, right? Today, once you <mark>plant Box 5</mark>, you'll finally have all five pentatonic boxes in your hands — the last piece of a five-piece puzzle. But Box 5 has one goosebump-inducing secret, and today you're going to feel it for yourself.

Box 5 lives in frets 14–17. The root A sits on the 6th string 17th fret, and also on the 1st string 17th fret. Now, here's the magic: the A at the 6th string 17th fret is exactly 12 frets above the 6th string 5th fret (the root of Box 1). 12 frets = one octave. Which means <mark>the top of Box 5 has the exact same shape as Box 1</mark>. Keep climbing the neck past Box 5, and Box 1 shows up again (one octave higher). <mark>The map comes full circle and lands right back where it started</mark>. Today, at this octave point, you'll see with your own eyes that the pentatonic scale is really "five boxes looping infinitely."

```json
{
  "id": "m1.w3.d2.pentatonic_box5",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 5 (wraps to Box 1 an octave up)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 13,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 17, "finger": 3, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 17, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 17, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 1, "label": "4", "role": "scale" },
      { "string": 2, "fret": 17, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

So today we connect two things. First, the Box 4↔5 connection (an extension of the moving sense you learned yesterday). Second, <mark>the connection from Box 5 up to Box 1 an octave higher</mark>. That second one really matters. When you reach the top of Box 5 (the A on the 1st string, 17th fret), you're actually standing on "the root of Box 1" again. So the end of the neck isn't a wall — it's <mark>a starting point in disguise</mark>. Once you know that, the fear of "there's nowhere left to run" during improv just disappears. No matter how high you go, it's the same pattern repeating, and you already know it.

Today's target, C (♭3), sits at the 5th string 15th fret and the 3rd string 17th fret in Box 5 — right near the very end of the neck. But this C is exactly the same "aching minor 3rd" as the C down in the lower boxes. Only the location is higher — the role never changes.

## ② Visual Reference

Today's final puzzle piece: Box 5. Centered on the root A (6th string 17th fret, 3rd string 14th fret, 1st string 17th fret), the notes highlighted in green are the target C (♭3). The A at the 6th string 17th fret is <mark>the doorway into "Box 1, one octave up"</mark>.

```json
{
  "id": "m1.w3.d2.pentatonic_box5",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 5 (wraps to Box 1 an octave up)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 13,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 17, "finger": 3, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 17, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 17, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 1, "label": "4", "role": "scale" },
      { "string": 2, "fret": 17, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Here's a line that connects Box 4 to Box 5 and keeps climbing all the way to the octave-up root. Measure 1 sweeps through Box 4 (frets 12–15), and in measure 2, <mark>a slide on the 1st string from the 15th fret (G) to the 17th fret (A)</mark> lands you at the top of Box 5 — that is, "the root of Box 1, one octave up."

```json
{
  "id": "m1.w3.d2.box4_to_box5_octave",
  "type": "tab",
  "meta": {
    "title": "Box 4 -> Box 5 -> octave root (wrap point)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
Metronome at 80, run the four-note sequence <mark>through Box 5 only</mark> — one ascending pass, one descending. You're near the very end of the neck now (frets 14–17), so the fret spacing is at its tightest. Your fingers will feel almost cramped together, and that's completely normal. Then alternate once each between yesterday's Box 4 and today's Box 5, so your body registers the distance between the two homes.

**10–20 min · Brain training (today's target = C · A, octave-check challenge)**
Metronome off, two challenges. ① Fret the two C (♭3) spots in Box 5 (5th string 15th fret, 3rd string 17th fret) with your eyes closed. ② <mark>Prove the octave</mark>: fret the A on the 6th string 5th fret and listen, then immediately fret the A on the 6th string 17th fret and listen. Success is when your ears confirm <mark>"same note, one octave up"</mark>. Make the visual connection that these two A's are the roots of Box 1 and Box 5, respectively.

**20–40 min · Real-world improv (Am one-chord backing, 78–85 BPM)**
Play the backing track, rule: start in Box 4 (fret 12) → move into Box 5 (fret 14) → <mark>climb all the way to the A at the top of the neck (1st string 17th fret, or 6th string 17th fret)</mark>, then close the phrase by landing back on a chord tone (C or A). Enjoy the feeling of pushing all the way up. Once you reach the top of the neck, remind yourself "this is Box 1 again" — feel free to toss in a lick up here, one octave higher.

```json
{
  "id": "m1.w3.d2.box4_to_box5_octave",
  "type": "tab",
  "meta": {
    "title": "Box 4 -> Box 5 -> octave root (wrap point)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "root" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds. Check: ① Did notes get muted or muffled in the tight frets of Box 5? ② Did the phrase that climbed to the top of the neck <mark>close cleanly with a landing</mark>, without "getting lost"? High frets produce a thin, sharp tone that mutes easily. Play it back, and if any string buzzed or died, check your fingering at that exact spot.

**Done when:** you can clear the Box 5 sequence up and down, reach the top-of-neck A via the Box 4 → 5 connection, and confirm the octave (5th-fret A ↔ 17th-fret A) by ear.

## ④ Tips / Common Mistakes

- **Muting in the high frets.** Frets 14–17 are so close together that the side of your finger easily presses down on the adjacent string and kills it. Fret with your fingertips more upright. If your notes sound "muffled," this is almost always the culprit.
- **Treating the end of the neck as a "dead end."** Don't panic if you reach fret 17 and feel like there's nowhere left to go. That's exactly where Box 1 (one octave up) begins. It's not a dead end — it's a revolving door.
- **Confusing Box 5 with Box 1.** Since the shape is identical an octave apart, it's easy to lose track of "is this Box 5 or Box 1 up high?" There's exactly one landmark to check: the position of the root A. If A is on the 6th string 17th fret, you're at the top of Box 5 (= Box 1, one octave up).
- **Letting the slide-landing A sound thin.** The A you land on after sliding from 15 to 17 on the 1st string is right at the top of the neck, so it naturally sounds thin. That's exactly when you need a wide, confident vibrato to turn it into "singing" — that's what makes the landing come alive.
