---
title: "A Full-Neck 3rd-Interval Run Connecting Boxes 1 through 5"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
lang: en
---

# Day 3 — Five Rooms Into One Hallway: Stringing the Whole Neck Together

## ① Theory / Explanation

Here's why we're doing this today. Right now, the fretboard in your head probably looks like this: "Room 1, Room 2, Room 3, Room 4, Room 5" — <mark>five separate boxes that never talk to each other</mark>. You play fine inside each room, but the moment you cross the threshold between rooms, you trip up. That's exactly why improv gets stuck at the 5th fret — because you're only ever using one room at a time.

Today, we're turning these five rooms into <mark>one long hallway</mark>. The tool that breaks down the walls is <mark>a 3rd-interval run that crosses the entire neck</mark>. Why 3rds specifically? Like we've said all through the past two weeks, simple up-and-down runs (la-la-la-la) let your hand roll on autopilot, so you never feel where a room's boundary actually is. But when you move in 3rds (skipping a note), the notes hop around and naturally push your hand toward the neighboring string and the neighboring room. A 3rd interval is basically the key that unlocks the wall.

The core technique is <mark>the position shift (slide)</mark>. Play a few notes in 3rds inside one room, slide up a string into the next room, then play in 3rds there too. Today's run starts at the 6th string 5th fret (Box 1's root) and travels all the way to the 3rd string 17th fret (Box 5's C), crossing the entire neck in one breath with three slides. Once you get through it, you'll feel in your hands that "oh, the neck really is one connected thing."

And don't forget — the point of this run isn't showing off your fingers. It's <mark>burning into your body exactly where the C (♭3) target sits</mark>, no matter what part of the neck you're passing through. Every time you fret one of those green C's during the run, take a mental snapshot: "C here, C there too." Tomorrow, in improv, this map becomes your weapon.

## ② Visual Reference

First, today's map: <mark>the full-neck A minor pentatonic</mark> (from the open strings to fret 15). It shows that the five boxes are actually one seamless net, connected without a single break. Everything highlighted in green is a C (♭3) target — see how evenly C is scattered across the whole neck. (The notes at frets 16–17 at the top of Box 5 are just the fret-5 pattern repeated one octave up, so you've already seen that same shape lower down on this map.)

```json
{
  "id": "m1.w3.d3.pentatonic_full_neck",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — full neck map (Box 1-5 connected)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "label": "4", "role": "scale" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "label": "b7", "role": "scale" }
    ]
  }
}
```

Now here's today's star: <mark>the full-neck 3rd-interval run</mark>. Measure 1 plays in 3rds inside Box 1 (fret 5), measure 2 slides up into Box 3 (fret 10), and measure 3 slides all the way up to Box 5 (frets 14–17), landing on the C (♭3) at the top of the neck. Pay especially close attention to the slide (position shift) markings.

```json
{
  "id": "m1.w3.d3.full_neck_3rd_run",
  "type": "tab",
  "meta": {
    "title": "Full-neck 3rd-interval run (Box 1 -> 3 -> 5, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 14, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 17, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70 → climbing in steps)**
Because of the slides, a full-neck run absolutely has to start slow. Play the run above once, very slowly, at BPM 70. Let your body learn the sliding distance at each of the three slide points (4th string 7→10, 1st string 12→15, 3rd string 14→17). Once it flows smoothly, step up to <mark>75, then 80</mark>, in increments of 5. The moment your slide landings start getting fuzzy is today's speed ceiling.

**10–20 min · Brain training (find-C-across-the-neck challenge)**
Metronome off. On the full-neck map, <mark>fret only the C (♭3) notes</mark>, moving up from the lowest fret to the highest, in order: 2nd string fret 1 → 5th string fret 3 → 3rd string fret 5 → 6th string fret 8 → 1st string fret 8 → 4th string fret 10 → 2nd string fret 13 → 5th string fret 15 → 3rd string fret 17. Say "C!" out loud every time you land on one. The goal is to burn into your eyes just how densely C is packed across the whole neck. Pass when you can go through the whole sequence without getting stuck.

```json
{
  "id": "m1.w3.d3.pentatonic_full_neck",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — full neck map (Box 1-5 connected)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "label": "4", "role": "scale" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "label": "b7", "role": "scale" }
    ]
  }
}
```

**20–40 min · Real-world improv (Am one-chord backing, 75–85 BPM)**
Play the backing track, rule: within a single phrase, <mark>you must touch both the low part of the neck (fret 5) and the high part (fret 15)</mark>. Feel free to throw in the run above exactly, or just borrow the slide points and move up and down freely. The key is "don't get trapped at fret 5." <mark>When you go up, land on the nearby C (♭3)</mark>; when you come back down, land on a nearby C again. Get the feeling of using the whole neck as your stage.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds. Check: ① Did the rhythm hiccup or stall when you crossed rooms via a slide? ② <mark>Did you actually use both the top and bottom of the neck</mark>, or did you drift back to just playing around fret 5? Slow down playback and you'll clearly hear both slide-landing pitch accuracy and any rhythm stalls. If a slide broke the flow, isolate that shift and repeat it 10 times on its own.

**Done when:** you can play the full-neck 3rd-interval run without a broken slide at your own top BPM (75 or higher recommended), and can fret all nine C spots across the neck in order.

## ④ Tips / Common Mistakes

- **The rhythm falls apart during a slide.** A room-crossing slide isn't "dead time." The time it takes to slide has to fit exactly inside its beat (here, an eighth note). If the slide runs late, the next note gets pushed back too. Land the slide "quickly, and right on the beat."
- **Reverting 3rds back to plain up-and-down motion.** If it feels frustrating and you slip back into a plain la-la-la-la run, the wall never comes down. It's completely normal for the hopping of 3rds to feel awkward — that awkwardness is exactly what builds the muscle that connects one room to the next.
- **Getting lost up the high end of the neck.** Climb above the 12th fret and the fretboard suddenly feels unfamiliar, and your hand freezes. When that happens, find the nearest root A or C first, drop anchor there, and start again from that point. As long as you have an anchor, you won't get lost.
- **Rushing for speed.** A full-neck run has slides built in, so even at the same BPM, it's a lot harder than a single-box run. Even if you were playing Box 5 at 90 yesterday, it's completely normal to start back at 70 today. Nothing to be embarrassed about — it's just how this works.
