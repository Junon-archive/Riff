---
title: "Cross-Box Target-Landing Improv Over an Am Backing Track"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
lang: en
---

# Day 4 — This Week's Finish Line: Improvising With the Whole Neck as Your Stage

## ① Theory / Explanation

Here's why we're doing this today. Over the past three days, we've widened your fretboard — broke out of the Box 1 cage, built bridges to Box 2 and Box 3, and learned to travel across them using 3rd intervals. But those three days were all about playing **<mark>fixed lines</mark>.** Today, we set that down and freely cross boxes **<mark>however you want</mark>**, right over the backing track. This is this week's real test.

One important mindset here — a wider neck does **not** mean "more traveling = better playing." The moment that screams beginner the loudest is when you're **<mark>nervously scrambling up and down the whole neck</mark>.** Pros, on the other hand, only cross boxes when they need to, and once they arrive, they **land precisely on that box's C (the ♭3)** and sing it out. In other words, movement is the means, and **<mark>landing is the goal</mark>.** A neck that's three times wider just means you now have three times as many C's to land on. Last week you only had Box 1's C to aim for — today, all three boxes' C's are your weapons.

Here's today's game: open a phrase over the backing track, **slide into whichever box you like, then <mark>land on that box's C or A and close with vibrato</mark>.** Open — move — close. Once this one cycle feels natural, you're no longer "someone trapped in a single box." You graduate this week as an improviser who uses the whole neck as their stage.

## ② Visual Reference

Here's the map of Am's chord tones (R · ♭3 · 5) across the neck. From fret 5 to 13, spanning all three boxes, every landing pad is marked. <mark>The green C (♭3) is your first-choice landing spot</mark>; the root A is your safe second choice. The blue E (the 5th) is a passing chord tone. This map is your compass for today's improv.

```json
{
  "id": "m1.w2.d4.am_chord_tone_map_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) across Box 1-2-3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

Here's an example cross-box improv lick. Measure 1 climbs up in Box 2 and slides to land on Box 3's C; measure 2 comes back down and slides to land on Box 2's C. This is your template for <mark>"climb and close, then descend and close"</mark>.

```json
{
  "id": "m1.w2.d4.cross_box_target_lick",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Cross-box improv lick (slide between boxes, resolve on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 10, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 82)**
Quickly run through this week's two slides (4th string, 2nd string) and the 3-box 3rd-interval line, once each at 82 BPM. A final check that your hands remember the whole neck. Play through the example lick above once or twice, slowly, to get the feel of <mark>"climb and close, then descend and close"</mark>.

**10–20 min · Brain training (today's target = the C's across all three boxes, on-the-spot aiming)**
Metronome at 80. Rule: play a few free notes in any box, and the instant you think "now!" — **<mark>find the nearest C (the ♭3) and land on it instantly</mark>.** Box 1 (3rd string fret 5 / 1st string fret 8), Box 2 (4th string fret 10 / 1st string fret 8), Box 3 (4th string fret 10 / 2nd string fret 13) — no matter which box you're in, you're building the reflex of landing on the nearest C. Pass with 8 successes out of 10 tries.

**20–40 min · Real-world feel (Am one-chord backing track, BPM 78–82)**
Today's main event, and this week's graduation exam. Put on a backing track. Rule: **open one phrase (the question) in your current box, then <mark>in the next phrase, slide into a different box and close (the answer) by landing on that box's C or A</mark>.** Like a call and response. Change boxes and land at least three times — ideally once in each of the three boxes. Don't forget: the goal isn't the movement — the goal is **<mark>singing once you get there</mark>.** If the urge to nervously scramble across the neck kicks in, show your self-control instead by staying in one box and holding a single C with a long, singing vibrato.

**40–50 min · Record & reflect (recommended)**
Definitely record today — this is this week's finished product. Play it back and check: ① when you switched boxes, did you glide across with a slide, or did it cut off abruptly? ② did you **<mark>actually land on C</mark>** in the box you moved to, or did you fumble around in unfamiliar territory and lose it? ③ compared to last week's recording (when you only used Box 1), has the sense of "space" in your sound widened? If it has — congratulations. The neck is no longer a cage. It's a stage.

**Today's finish line (= your Week 2 graduation criteria):** Over the Am backing track, switch boxes at least 3 times (via slides) and intentionally land on that box's C (the ♭3) or A (the root) each time. Finish each landing with vibrato. Complete at least 3 cycles of "open — move — close," with no nervous scrambling.

## ④ Tips / Common Mistakes

- **Nervously scrambling across the neck.** This is today's biggest trap. If you feel obligated to use the whole widened fretboard and end up sweeping up and down, it screams beginner. Move "once, when needed," and always finish with a landing. Moving less and singing with certainty — that's what pros do.
- **Getting lost in the box you moved to.** If you arrive in a new box and forget where the C was, the landing falls apart. That's exactly why you memorize the chord-tone map above. Before you move, aim ahead — think "that box's C is right there" — and then cross over.
- **Teleporting your hand instead of sliding.** If you jerk your hand up through the air when switching boxes, the sound cuts and the beat drags. We've said it all week: **movement happens by gliding across the string.** That's what keeps the phrase feeling like one continuous thing.
- **Grazing past the landing note.** Once you arrive on C, stay there for at least one beat and sing it with vibrato. No matter how wide a stretch of neck you use, if you don't stay on the landing, it's just a "quick pass-through," not music. This week's wider stage is ultimately completed by one thing: **a landing you actually stay on.**
