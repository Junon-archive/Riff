---
title: "Locking In Pentatonic Box 4 + Sliding the Box 3↔4 Connection"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
lang: en
---

# Day 1 — Moving Up to the 12th Fret: Planting Box 4 and Connecting It to Box 3

## ① Theory / Explanation

Here's why we're doing this today. For the past two weeks, you've only been hanging around the 5th fret neighborhood (Boxes 1, 2, and 3). Your hand's gotten comfortable there, right? Here's the thing: a lot of intermediate players who get stuck when improvising simply haven't spent much time on the lower half of the neck. The second a backing track starts, their hand crawls straight to the 5th fret and recycles the same lick over and over. The neck has 21 frets, and they end up spending all their time on frets 5 through 8.

So starting today, we're moving up past the 12th fret. Our first new home is Box 4. In this box, the root note A sits on the 5th string, 12th fret. What's special about the 12th fret? It's the octave point — exactly twelve frets up from any open string. So the root of Box 4 (A on the 5th string, 12th fret) is the same A you already know from Box 1 at the 5th fret, just met again one octave higher. This isn't unfamiliar territory — it's the same song, sung in a higher voice.

And today's real assignment isn't to memorize Box 4 in isolation — it's to stitch it together with Box 3. The Box 3 you learned last week (frets 9–12) and today's Box 4 (frets 12–15) share a wall right at the 12th fret. They're not strangers; they're neighbors holding hands at fret 12. To feel that in your body, today we use a slide. Slide from the 5th string 12th fret (A, the root) all the way to the 15th fret (C, the ♭3), and in one motion you move from Box 3 to Box 4 while landing right on today's target note, C (♭3). One move teaches you both "connecting boxes" and "landing on the 3rd" at once.

The coordinates to remember never change: A (R) · C (♭3) · D (4) · E (5) · G (♭7). Only the location moved up 12 frets — the role of each note stays exactly the same. And especially C (♭3): in Box 4, it lives on the 5th string 15th fret and the 2nd string 13th fret. That's today's green light.

## ② Visual Reference

First, today's new home: Box 4. Centered on the root A (5th string, 12th fret), the notes highlighted in green are C (♭3) — today's landing target.

```json
{
  "id": "m1.w3.d1.pentatonic_box4",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 4 (12th position)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 11,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 1, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 3, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 4, "label": "b7", "role": "scale" }
    ]
  }
}
```

Now here's the connecting line between Box 3 and Box 4. Measure 1 sweeps through Box 3 (frets 9–13) in 3rds, and in measure 2, a slide on the 5th string from the 12th fret (A) to the 15th fret (C) moves you into Box 4 while landing on C (♭3). Sing that final C with vibrato.

```json
{
  "id": "m1.w3.d1.box3_to_box4_slide",
  "type": "tab",
  "meta": {
    "title": "Box 3 -> Box 4 sliding connection (land on b3)",
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
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
With the metronome at 80, run the same four-note (sixteenth-note) sequence through Box 4 only — one ascending pass, one descending. It's the same sequence you did at the 5th fret, just now up at the 12th fret. Your hand shape will feel slightly tighter than at fret 5 (frets get narrower as you go up the neck). The whole point of this warm-up is getting your hand used to that feeling.

**10–20 min · Brain training (today's target = C / ♭3, inside Box 4)**
Metronome off. Inside Box 4, find and fret just the two C (♭3) spots — 5th string 15th fret, and 2nd string 13th fret. Every time you land on one, say "C!" out loud. Next challenge: close your eyes, fret the root A (5th string, 12th fret), then feel your way to the nearest C — it's just one finger-move away. Pass when you can go back and forth between A and C with your eyes closed, within 3 minutes.

**20–40 min · Real-world improv (Am one-chord backing, 75–80 BPM)**
Pull up any "Am backing track." Today's rule: start playing in Box 3 (fret 9), and partway through, you must slide up into Box 4 (fret 12), then land on C (♭3) and stop. Feel free to use the connecting line above exactly, or improvise your own variation. The key is building the flow of "start low → slide up → land on the target" inside a single phrase. Repeat at least 8 times.

**40–50 min · Record & reflect (recommended)**
Record just 30 seconds with whatever you've got — voice memo app, any recorder. Listen back and check one thing only: is the pitch of the note you land on (C) actually accurate? Since you're sliding by feel rather than watching the fret, it's easy to overshoot or undershoot the 15th fret. If you can slow down playback, it'll help you catch that landing moment more clearly. If the landing sounds fuzzy, isolate that slide and repeat it 10 times on its own.

**Done when:** you can clear the Box 4 sequence up and down at BPM 80, and land on C (♭3) 8 times via the Box 3 → Box 4 slide connection (including the eyes-closed A↔C round trip).

## ④ Tips / Common Mistakes

- **Your hand shape collapses at the 12th fret.** Frets get narrower up high, so if you bring the same finger spread you used at fret 5, your fingers will bump into each other. Curl your hand in slightly — same shape, smaller size.
- **Mistaking a slide for "slide fast."** The point of a slide isn't speed — it's landing accurately. 12 to 15 is three frets. Even if you go slowly, you need to stop dead on 15 so the C actually rings — that's what makes it a landing. Overshoot it and you hit D (the 4), and suddenly it just sounds "off."
- **Retreating back to Box 3.** Fret 9 is comfortable and familiar, so you keep drifting back down. Today is specifically about moving up and sticking with it. That awkward time spent standing at the 12th fret is the only thing that actually widens your range on the neck.
- **Grazing past the landing C.** Once you slide into C, stay there for at least one beat and sing it with vibrato. The power of a landing comes from staying — if you just brush past it, that's not a landing, it's just a pass-through.
