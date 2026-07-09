---
title: "Self-Feedback and Retakes — Operating on Your Own Recording by Ear, Then Recording It Again"
dayKey: "m3.w12.d4"
estMinutes: 50
i18nKey: "lesson.m3.w12.d4"
lang: en
---

# Day 4 — The Period at the End of Three Months: Dissecting Your Own Recording and Recording One Better Take

## ① Theory / Explanation

Here's why we're doing this today. Yesterday you finished your solo and recorded it whole for the first time. But this is where most people stop — because **they can't really listen to their own recording.** While you're playing, your brain is busy tracking your hands, the next chord, the beat — it can't actually hear "how do I sound right now." In your head it felt great, but hit play and it's "wait... is that me?" Today is about closing that gap, and **re-recording one better take (a retake).** This is the real period at the end of your three-month curriculum.

There's no new technique. Today's weapons are your **ears** and **any recording tool.** You don't need a specific app. A phone voice memo or a laptop recorder — either works, using just two features found in most players.

- **Playback speed control (0.75x, 0.5x):** Things you couldn't catch in real time — a landing that's half a beat late, an uneven vibrato — get magnified and become obvious when you slow it down. It's a microscope.
- **Loop a section:** Pick just the one or two bars you're not happy with and loop them over and over. Narrow down the problem spot so you can fix it precisely.

And from today, lock in the **four scoring criteria** you'll use. These are the same four you've been watching bit by bit all week.

- **① 3rd-landing accuracy** — Did you arrive on the 3rd (C·F#·C#) right on the beat when the chord changed?
- **② Color tone use** — Did F# (major 6th), G (♭7), and the blue note come through as color, or did they just pass by?
- **③ Vibrato stability** — Was the wobble on your landing notes an even, steady cycle, or a nervous shake?
- **④ Rhythm timing** — Was the space the right length? Did the bend and landing stay locked to the beat?

## ② Visual Reference

A retake **doesn't mean re-recording the whole song every time.** It means re-recording, with focus, just the weakest section. And in this song, the hardest and most important section is already decided — **the seam where bar 4 crosses into bar 5.** That's where you switch from C (♭3, Dorian) to C# (major 3rd, Mixolydian) and immediately push into the climax with a blue-note bend. These two bars are today's "retake excerpt." Get just this part perfect, and the whole song comes alive.

```json
{
  "id": "m3.w12.d4.switch_retake_excerpt",
  "type": "tab",
  "meta": {
    "title": "Retake excerpt - the mode-switch seam (D7 -> A7, bars 4-5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 92) — warming up just the seam**
Loop just the excerpt above (the two-bar seam) at metronome 92. Especially smooth out the finger move from bar 4's ending C (3rd string, 5th fret) to bar 5's C# (3rd string, 6th fret), and the blue-note bend right after (1st string, 8th fret → C# pitch). Today's warm-up is time spent loosening the song's weakest joint.

```json
{
  "id": "m3.w12.d4.switch_retake_excerpt",
  "type": "tab",
  "meta": {
    "title": "Retake excerpt - the mode-switch seam (D7 -> A7, bars 4-5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (scoring yesterday's recording on the four criteria)**
Pull up yesterday's full recording and slow the playback down — once at **0.75x**, once at **0.5x**. Draw four columns on paper (landing / color / vibrato / timing) and mark each one with just a △ or ○. Then pinpoint **the one section** with the most △'s. Nine times out of ten, it'll be the seam (bars 4-5).

**20–40 min · Real retakes (Am7-D7-A7 backing / 88–92 BPM)**
Now, record again. The trick is **one criterion per take.**
1) First, record **just the weak section** over the backing track 3-4 times → play it back → pick out the one criterion that's most off (e.g., timing) → fix only that and re-record.
2) Once the section is improved, do **one full take of all 8 bars.** Listen to it side by side with yesterday's.
3) Cycle through 3-4 takes, changing the criterion each time — "this time just vibrato," "this time just the space." Success is improving exactly one thing each time.

**40–50 min · Locking in your final best take (recommended)**
Choose the take you like best and save it as **today's finished version** (put the date in the file name if you can). Give it one more listen at 0.75x and note just one remaining thing to improve. That's your homework for the journey ahead, past these three months. And — compare yourself to who you were three months ago. Someone who couldn't improvise a single note is now recording their own solo and fixing it with their own ears. That's today's real finish line.

**Today's finish line:** Score yesterday's recording on the four criteria → pinpoint the weak section → lock in one "best take" that shows a noticeable improvement in at least one criterion through retakes.

### Self-feedback checklist (for scoring your final version)
- [ ] **3rd-landing accuracy** — all four landings (C·F#·C#·A) arrived right on the beat.
- [ ] **Color tone use** — the major 6th, ♭7, and blue note clearly come through as the song's color.
- [ ] **Vibrato stability** — the vibrato cycle on long landing notes is steady, not nervous.
- [ ] **Rhythm timing** — the space is the right length, and the bend climax and final landing sit right on the beat.

## ④ Tips / Common Mistakes

- **Listening to your recording as "self-criticism" instead of "evaluation."** Hit play, think "ugh, I'm bad," and shut it off — that's a zero. A recording isn't a trial, it's a map. It only means something when it leads to "the landing's late here → so let's just redo this part."
- **Re-recording the whole thing from scratch every time.** A waste of time. Pick the two weakest bars, retake them intensively, and once they've improved, do one full take. Narrowing the section is what builds skill fast.
- **Trying to fix all four criteria in one take.** Your brain overloads and you miss everything. One per take. "This time, just timing."
- **Not using speed control or section looping.** Listening only in real time, you'll never catch a half-beat error. Slow it down, and loop just the section that's bugging you. It's basic technique that works with any tool.
- **Obsessing over a perfect take and never finishing.** Today's goal isn't a flawless performance — it's a **best take that's one step better than yesterday.** The period at the end of three months isn't "perfection" — it's "becoming someone who can listen to themselves and fix it." Congratulations, this is the finish line.
