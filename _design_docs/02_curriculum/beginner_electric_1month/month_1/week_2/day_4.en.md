---
title: "Week 2 complete — the E minor pentatonic riff"
dayKey: "m1.w2.d4"
estMinutes: 30
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Your first riff, finished with two hands

## ① Theory

At last, the final day of week 2. The three things you built this week — <mark>two-hand sync</mark>, string crossing, and the palm-muted chug — all go into one riff. There are no chords yet. When each single note lands exactly on the metronome and lies low under palm muting, that's a real riff. Today's goal isn't to play it well, but to run it start to finish without a wobble.

The riff you'll play today is an original drawn from the <mark>E minor pentatonic</mark>. You keep the repeating open E (root) low under palm muting, then release the mute on just one note — the green-highlighted 4th (A, 5th fret) — so it pops out. That one note is the riff's expression. In the last measure it settles down A→b3→E to finish. The whole riff is four measures, the same shape repeating with small variations, so there's nothing to fear.

Once you know the shape, it isn't hard — <mark>a repeating root plus an upward leap, then a landing</mark>, the basic grammar of pentatonic phrasing. In measure 2 you cross briefly to the 5th string, 5th fret (b7) and come back, and the string crossing you learned until yesterday is exactly what you use here. This riff's feel lives on in songs like "Seven Nation Army" and "Come As You Are." Run it start to finish without a wobble today, and week 2 is fully carved into your hand.

## ② Visuals

First, pull out just the trickiest spot — the crossing to the 5th string in measure 2 — and practice it. Once this <mark>string crossing</mark> is smooth, the whole riff gets easier.

```json
{
  "id": "m1.w2.d4.riff_prep_cross",
  "type": "tab",
  "meta": { "title": "Riff prep — crossing to the 5th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70.** Open E (palm mute) → cross to the 5th string, 5th fret (b7) → land back on the open E. Keep the alternate picking going even at the moment you cross.

Now, this week's deliverable. Keep the repeating open E low under palm muting, and let just one note — the <mark>green 4th (A)</mark> — pop out.

```json
{
  "id": "m1.w2.d4.em_pentatonic_riff",
  "type": "tab",
  "meta": { "title": "E minor pentatonic riff", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80, alternate.** Chug the repeating open E **low under palm muting**, and release the mute on just the green-highlighted **4th (A, 5th fret)** so it pops out — this one note is the riff's expression. At M4 it settles down A→b3→E to finish. Repeat four times.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Repeat the palm-muted chug (yesterday's example) lightly on the 6th string at BPM 60 to warm the right hand. Reset the hand-edge position first.

**7–17 min · Today's skill**
Repeat Example 1 (the crossing prep) at BPM 70. Focus on crossing to the 5th string and <mark>landing precisely</mark> back on the open E.

**17–27 min · Applying it (this week's deliverable)**
Repeat the pinned riff four times at BPM 70 → once there's no wobble, raise it one step to the target BPM 80. Don't forget to keep just the 4th (A) alive by releasing the mute.

**27–30 min · Check**
Write down the BPM you reached, and record 30 seconds to hear whether the riff runs start to finish without cutting out.

**Done when:** you can run the E minor pentatonic riff start to finish without a wobble at the target BPM 80. (Week 2 complete!)

## ④ Tips / common mistakes

- **Palm-muting the 4th too.** Mute the accent note (A, 5th fret) as well and the riff's expression disappears. Lift the hand edge just for that one note.
- **Lagging at the string crossing.** Hesitate crossing to the 5th string in measure 2 and the beat pushes back. Keep the alternate picking rolling.
- **Speed first.** 80 is only a target. Clean at 70 beats messy at 80 every time.
- **Worrying about a stiff hand.** If the riff feels long, learn it two measures at a time. Learn it in pieces and link them up.
