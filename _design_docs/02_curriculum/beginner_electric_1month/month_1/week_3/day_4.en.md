---
title: "Week 3 complete — the palm-muted power-chord riff"
dayKey: "m1.w3.d4"
estMinutes: 30
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — Your first rock riff, brick by brick

## ① Theory

At last, the final day of Week 3. The three things you built this week — <mark>the power-chord shape</mark>, moving the shape, palm-muted downpicking — all go into a single riff. Today's riff is an original that **growls low under palm muting**, then pushes the power chords up like a staircase and bursts wide open. The goal isn't to play well, it's to **run it start to finish without a wobble**.

The riff is four bars. Bars 1 and 3 drive open E5 with a <mark>palm-muted chug</mark>, while bars 2 and 4 slide the 5th-string root shape up the staircase **C5→D5→E5**. The contrast — the low, buried sound opening wide as the palm lifts on the climb — is the riff's expression. **The moment to lift the palm** is exactly when you cross from the 6th string to the 5th-string shape — rehearse it in advance and the riff bursts far more brightly. You land on the final green E5 (7th fret) and stop dead.

Once you know the structure, it's not hard — <mark>a repeating root + a stair-step rise, then landing</mark>, the basic grammar of a rock riff. The staircase reuses the **C5↔D5 move** you drilled up through yesterday. This feel lives on in songs like 〈You Really Got Me〉 and 〈Iron Man〉. If four bars feel like too much at once, learn the palm-mute bars (1 and 3) and the climb bars (2 and 4) **separately, then join them up**. Run this riff through at the target BPM today, and Week 3 is carved fully into your hands.

## ② Visuals

First, isolate the trickiest spot — the <mark>climb</mark> (C5→D5→E5) of the last bar. **Get this staircase smooth** and the whole riff eases up.

```json
{
  "id": "m1.w3.d4.climb_prep",
  "type": "tab",
  "meta": { "title": "Climb prep — C5 · D5 · E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80. Push the 5th-string shape up two frets at a time and land precisely on the green E5 (7th fret). Move the whole thing while holding the shape.

Now this week's finished piece. Keep **open E5 low with palm muting**, and release the palm on the climb to ring wide open.

```json
{
  "id": "m1.w3.d4.powerchord_riff",
  "type": "tab",
  "meta": { "title": "Palm-muted power chord riff (E5 · C5–D5–E5 climb)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ **BPM 90, all downpicks.** Palm-mute the open E5 with your palm to growl it low (M1·M3), and release the palm on the climb (C5→D5→E5) to ring it wide open. Land on the final green E5 (7th fret) to finish. Repeat 4 times.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
At BPM 70, lightly repeat yesterday's palm-muted chug (open E5) on the 6th string to revive your picking-hand palm position.

**7–17 min · Today's skill**
Repeat Example 1 (climb prep) at BPM 80. Push the **5th-string shape** up the staircase and focus on landing precisely on the green E5 (7th fret), <mark>climbing the stairs</mark>.

**17–27 min · Applying it (this week's finished piece)**
Repeat the pinned riff four times at BPM 80 → once there's **no wobble**, raise it one step to the target BPM 90. Keep open E5 low and palm-muted, the climb wide open — don't lose that contrast.

**27–30 min · Check**
Write down the BPM you reached and record 30 seconds to hear whether the riff runs start to finish without a break.

**Done when:** you can run the palm-muted power-chord riff start to finish without a wobble at the target BPM 90. (Week 3 complete!)

## ④ Tips / common mistakes

- **Palm-muting the climb too.** Mute the staircase (C5→D5→E5) as well and the wide-open contrast vanishes. Lift the palm off just that stretch.
- **Beat lag on the stairs.** Hesitating as you move to the 5th string in bars 2 and 4 drags the beat. Slide the whole block while holding the shape.
- **Speed first.** 90 is only the target. Clean at 80 beats messy at 90 by a mile.
- **The riff feeling long.** If four bars feel overwhelming, learn two bars at a time. Learn the pieces, then join them up.
