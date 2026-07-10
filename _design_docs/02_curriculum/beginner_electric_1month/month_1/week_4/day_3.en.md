---
title: "A taste of pentatonic — a trailer for the next journey"
dayKey: "m1.w4.d3"
estMinutes: 30
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — The first scale that opens the next track's door

## ① Theory

All week you've handled chords. Today we turn for a moment to taste <mark>melody</mark>. Solos — that sound of the guitar singing — mostly come out of a scale called the "pentatonic." It's a five-note scale, and since not one of its notes sounds off, even a beginner poking around at random ends up sounding decent. Today we'll only crack it open as a <mark>taste</mark> — mastering it fully is the next journey's job.

The shape is called "Box 1." Around the 5th fret, two notes per string, it climbs and descends six strings like a ladder. The blue note is the root (A), and the note highlighted in green is the b3 — the special note that decides this scale's color. Your fingers use only the index (1) and the ring/pinky (3·4), so it's not hard. All five notes fit within one hand position, so you won't get lost on the fretboard. Today all you need is to sweep this shape up and down until it settles into your hand.

Then we add one bit of magic. The <mark>hammer-on and pull-off</mark>. After striking one note, sounding the next by "hammering" it with a finger and no pick is the hammer-on; the reverse, "flicking" the finger to sound a lower note, is the pull-off. You need these two for a solo to connect like singing instead of breaking up. The more you save on picking, the more smoothly the sound flows. Taste that feel today with one short three-note lick, and the next track's door is already open.

## ② Visuals

First, today's map — A minor pentatonic Box 1. Start on the blue root (A) and climb up and down six strings.

```json
{
  "id": "m1.w4.d3.pentatonic_box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic — Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

▶ **BPM 70, one note at a time.** Climb from the 6th-string root (A) up to the 1st string and back, settling it into your hand. This shape becomes your first solo in the next track.

Now practice the hammer-on and pull-off on the 6th string. Move between the root (A) and the b3 with a single pick.

```json
{
  "id": "m1.w4.d3.legato_drill",
  "type": "tab",
  "meta": { "title": "Legato drill — hammer-on and pull-off (R to b3)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70. Pick the root (A · 5th fret) just once, hammer the green b3 (8th fret) with your pinky (hammer-on) → flick the finger to return to the root (pull-off).

Finally, the <mark>three-note lick</mark>. Root to b3 with a hammer-on, back to root with a pull-off — singing with just three notes inside the box.

```json
{
  "id": "m1.w4.d3.first_lick",
  "type": "tab",
  "meta": { "title": "First lick — R hammer b3 pull R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 1, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70. Strike the 1st-string root (5th fret), hammer to the green b3 (8th fret), pull off back to the root. When the three notes connect in one breath, you've got it.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
At BPM 70, sweep Box 1 from the 6th-string root to the 1st string, one note at a time, very slowly, to lay the shape into your hand.

**7–17 min · Today's skill**
Repeat the 6th-string legato drill. Pick once at the start; sound the rest with the left-hand strength of <mark>hammering and flicking</mark>. Check both notes ring clearly.

**17–27 min · Applying it**
Repeat the three-note lick at BPM 70 → once the three notes connect smoothly, hold it there. You can even chain the lick two or three times and play it like a little phrase.

**27–30 min · Check**
Write down the BPM you reached and record 30 seconds to hear whether the hammer-on and pull-off ring clearly even without a pick.

**Done when:** you can climb A minor pentatonic Box 1 up and down and play one three-note lick smoothly with hammer-on and pull-off.

## ④ Tips / common mistakes

- **A weak hammer-on.** Lay the finger down softly and no note sounds. Hammer just behind the fret so it snaps out clearly.
- **A pull-off that's just a lift.** Only lifting the finger up kills the sound. Flick the string slightly downward as you pull it away so the lower note rings.
- **Wandering outside the box.** Today use only the notes inside the 5th-fret box. Until your hand settles, staying in this spot is plenty.
- **Chasing perfection on a taste.** Today is just the day you open the door. Master the pentatonic slowly in the next track.
