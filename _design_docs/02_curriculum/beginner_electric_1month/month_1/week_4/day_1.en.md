---
title: "Giving the rhythm a face — rests and syncopation"
dayKey: "m1.w4.d1"
estMinutes: 30
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — How to give the rhythm a face

## ① Theory

Last week you stacked power-chord bricks. But hit the same chord <mark>four times, neat and even</mark>, and it feels a little flat. Today we give that riff a face. The trick isn't playing more — it's actually <mark>resting now and then</mark>. The **gap a rest carves out** breathes life into the sound, and **pulling a beat slightly early** makes the riff feel like it's leaping forward. Four weeks ago even ringing one open string was a struggle; now you're designing rhythm.

First, rests. A rest on the staff isn't a "don't play" sign, it's a "**breathe here**" sign. Only when there's a gap between sounds does the next hit land harder. On the rest, your picking hand lays the palm or a finger lightly over the strings to cut the sound dead. **One empty slot** actually makes the next sound stand out more sharply. A riff that breathes sounds far cooler than one crammed full.

Next, syncopation. Normally you play on the beat, but every so often playing early, in between beats (the upbeat), gives the rhythm a <mark>forward-leaning tension</mark>. Add a touch of **octave** on top and the same riff gets a thicker voice. Today we drip in these three — **rests, syncopation, octaves** — one drop at a time to bring yesterday's riff to life. Expression comes not from the number of notes but from how you place sound and silence. So don't rush — hold each slot in its exact place.

## ② Visuals

First, feel the <mark>gap</mark> a rest makes. Play E5 for **two beats, then rest one**, and repeat.

```json
{
  "id": "m1.w4.d1.rest_drill",
  "type": "tab",
  "meta": { "title": "Rest drill — breathe the E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80. Play two beats, rest one. On the rest, mute the strings with your palm to cut the sound dead.

Now octaves. Lay the same **note an octave higher (8)** over the root and the riff's voice gets thicker.

```json
{
  "id": "m1.w4.d1.octave_voicing",
  "type": "tab",
  "meta": { "title": "Octave voicing — G and A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] }
    ]}
  ]}
}
```

▶ BPM 80. The root and the note an octave up (8) sound together. Lightly mute the 5th string in between with a finger.

Now put all three into one riff. Breathe with the rests, pull the upbeats early, and land on the final green G5.

```json
{
  "id": "m1.w4.d1.rhythm_riff",
  "type": "tab",
  "meta": { "title": "Rhythm riff — rests and syncopation (E5 to G5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90. Breathe with the rests, push the upbeats, and land on the final green G5 (3rd fret). Repeat 4 times.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
At BPM 70, grip and release last week's power-chord shapes (E5·G5) to warm up your hands, checking both notes ring clear.

**7–17 min · Today's skill**
Repeat the rest drill and octaves very slowly. On the <mark>resting spot</mark>, check the sound cuts cleanly, and that the **two octave notes** sound together.

**17–27 min · Applying it**
Repeat the rhythm riff four times at BPM 80 → once there's **no wobble**, raise it one step to the target BPM 90. Just focus on resting fully on the rests and pulling the upbeats a touch early.

**27–30 min · Check**
Write down the BPM you reached and record 30 seconds to hear whether the rests come through clearly and the riff has a face now.

**Done when:** you can play the power-chord riff with rests and syncopation start to finish without a wobble at the target BPM 90.

## ④ Tips / common mistakes

- **Filling the rest with sound.** Ring through the beat you should rest on and the gap vanishes and it goes flat. On the rest, firmly cover the strings with your hand.
- **Syncopation bleeding into beat lag.** Pulling the upbeat early is good, but if it drags the next downbeat, that's trouble. Keep your toe locked to the metronome.
- **The strings between the octave ringing.** If the 5th string between root and octave rings along, it gets messy. Lightly mute it with the flesh of a fretting finger.
- **Speed greed.** 90 is only the target. Crisp rests at 80 are far cooler than a mush at 90.
