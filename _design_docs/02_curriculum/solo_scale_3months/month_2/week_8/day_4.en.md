---
title: "Deep-Dive Recording Analysis — Precisely Checking Landing Timing and Vibrato"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
lang: en
---

# Day 4 — Ear Surgery: Recording Yourself to Dissect Landing Timing and Vibrato

## ① Theory / Explanation

Here's why we're doing this today. Over the past three days, you've etched F, B, E landings into your hands. But this is exactly where most people get stuck. The reason: **you can't <mark>listen to your own playing objectively</mark>.** While you're playing, your brain is busy moving your hands and thinking about the next chord, so it barely has room to actually hear "how does this sound right now?" It felt perfect in your head, but then you hear the recording and think, "wait... is that really me?" Today is about closing that gap.

Today isn't about learning a new technique. It's **the day you record this week's results and <mark>perform ear surgery on them</mark>.** Let's narrow the checkpoints down to exactly three.

- **<mark>① Landing timing:</mark>** Does the moment the chord changes line up exactly with my 3rd (F, B, E)? Am I not half a beat late? — This is this week's core metric.
- **<mark>② B→E resolution:</mark>** When moving from G7's B to Cmaj7's E, can you actually hear that feeling of tension releasing? Or do the two notes just sit there separately, disconnected?
- **<mark>③ Landing note vibrato:</mark>** Did you cut off the final E (Cmaj7's 3rd) flatly and abruptly, or give it a slight shake to make it "sing"? When the landing note sings, the whole solo comes alive.

Here's where we use a weapon called **<mark>playback speed control</mark>**. Most recording apps and players have a feature to slow playback down to 0.5x or 0.75x (this isn't about any specific app — any tool with this feature works). Slowing things down magnifies things you couldn't hear in real time — a "half-beat delay" or "uneven vibrato cycles" — and puts them right in your ear. It's like looking through a microscope.

## ② Visual Reference

Here's today's **<mark>target phrase</mark>** to record. It's the "finished" guide tone line, packing in everything you've learned this week: the 3rd lands on the first beat of every chord, the F at the end of measure 2 resolves by a half step into the E in measure 3, and vibrato lands on the final E. Record this over the backing track, and grade your own playing against the three metrics below.

```json
{
  "id": "m2.w8.d4.record_target_phrase",
  "type": "tab",
  "meta": {
    "title": "Week 8 target phrase to record (full ii-V-I guide tone line)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "role": "chord_tone" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 76) — Getting the target phrase into your hands**
Play the target phrase above slowly, 3–4 times, at metronome 76. No recording yet. Just check with your hands that <mark>the landing notes F, B, E hit the first beat</mark> of each measure, and that vibrato lands on the final E. If any measure is giving you trouble, repeat just that measure 5 times until it's smooth.

**10–20 min · Brain training (setting your self-grading criteria)**
Before recording, etch your scorecard into your mind. It's fine to just jot down three lines on paper: **① Did the landing line up with the chord change / ② Can you hear the B→E resolution / ③ Does the final E sing.** Agree with yourself not to evaluate anything else today besides these three. <mark>A narrow ruler</mark> is what lets you fix things precisely.

**20–40 min · Recording (Dm7-G7-Cmaj7 backing track / BPM 72–76)**
Play the backing track and record the target phrase, **<mark>3–4 loops in one take.</mark>** Don't try to be perfect — just capture your current level as-is. Once you've recorded, immediately play it back → grade it on the three metrics → pick the single weakest metric and record again. Repeat this 3–4 times, each time focusing on **<mark>just one metric</mark>**, like "this time it's only landing timing."

**40–50 min · Precision analysis (playback speed control)**
Take your best take and listen back **<mark>slowed down to 0.75x, then 0.5x.</mark>** Things invisible in real time become visible: which chord's landing is subtly late, whether your vibrato cycle is even. Jot down just one problem you find — that becomes your personal homework before moving into next week (Month 3, modes).

**Today's completion criteria:** Record the target phrase over the backing track. Grade your own take on the three metrics (landing timing, B→E resolution, E vibrato), and use slowed-down playback to find at least one improvement point on your own.

## ④ Tips / Common Mistakes

- **Listening to your recording as "self-blame" instead of "evaluation."** If you play it back, say "ugh, I'm terrible," and turn it off, that helps nothing. A recording isn't a trial — it's a map. It only matters if it leads to "this landing's late → so let's just fix this one thing."
- **Trying to fix everything at once and fixing nothing.** One metric per take. "This time it's just timing." Trying to watch all three at once overloads your brain, and you end up missing everything.
- **Not using speed control.** Listening only in real time, you'll never catch a half-beat error. Slowing it down gives you a microscope. Make sure you use this weapon.
- **Treating vibrato as an afterthought, a sloppy "decoration."** The vibrato on the landing note E is this week's finishing punctuation. Don't shake nervously and thin — use your wrist for a wide, even cycle. When this one note sings, every landing before it comes alive.
- **Obsessing over a perfect take.** Today's goal isn't a flawless recording — it's an **accurate self-diagnosis.** Finding one problem in an ugly take is worth ten times more than a take that happened to come out great by luck.
