---
title: "Week 0 · Day 4 — Metronome Discipline + Backing Track & Recording Setup + Learning to Hear Yourself"
dayKey: m1.w0.d4
estMinutes: 50
i18nKey: lesson.m1.w0.d4
lang: en
---

# Day 4 — Metronome Discipline + Backing Track/Recording Setup + How to Listen to Your Own Playing

## ① Theory / Explanation

Here's why we're doing this today: today we're finishing off the **working environment and habits** that'll roll with us through the next 12 weeks. No matter how great a phrase is, if it's **not sitting on the beat**, it's an accident, not improvisation. And if you **can't hear** your own playing, you simply cannot improve. Today, instead of hand technique, we're setting up these two systems.

### 1) The metronome isn't a "prison" — it's a "drummer"

A lot of people, the moment they turn on a metronome, feel chased by that click. Let's flip the perspective. The metronome isn't a warden watching your every move — it's **a drummer who holds the exact same tempo forever, without a single complaint.** The freedom of improv isn't "the freedom to ignore the beat" — it's "the freedom to master the beat completely, and play on top of it."

One discipline: **never practice at a speed you can't play cleanly.** If you're fumbling notes, you're already too fast. Start at the slowest tempo where you can play it exactly right, and once you nail it clean twice, bump it up 4 BPM. This is our speed rule for all three months.

### 2) Backing tracks = your band

Playing scales alone is exercise. **The moment you add a backing track, it becomes "playing."** With harmony underneath, your ear can actually tell whether the note you chose "fits" or "clashes." You don't need any specific app. Just search **"Am backing track"** on YouTube and you'll get hundreds of results. Pick a few slower ones (70–80 BPM), some bluesy, some groove-oriented, and **bookmark them.** That's our band.

### 3) Recording = a mirror that doesn't lie

This is today's real core lesson. **It's physically impossible to objectively hear your own playing while you're playing in real time.** Your brain is entirely occupied by your hands. That's why you have to record it and listen back with "an audience's ears" — that's the only way the real problems become visible.

Any tool works, genuinely. **A phone voice memo, any recording app** — all fine. You don't need any particular app. Don't worry about video or audio quality — the only thing that matters is **building the habit of capturing it.** It's not required daily, but at least 2–3 times a week is recommended.

**Just 3 things to check when you listen back** (this becomes our standard self-feedback checklist going forward):
1. **Timing** — Locked to the beat, or rushing/dragging?
2. **Landing** — Did the phrase end on some random note, or on a stable one like R/♭3 (a chord tone)?
3. **Space** — Did you jam notes in nonstop, or leave room to breathe?

## ② Visual Reference

Below is a tab for **"riding a rhythm on one note + leaving space."** There's only one note — A (1st string, 5th fret) — but half of it is **rests (space).** Reproducing this rhythm exactly to the metronome is today's discipline drill. (`rest: true` marks a rest.)

```json
{
  "id": "m1.w0.d4.one_note_groove",
  "type": "tab",
  "meta": {
    "title": "One-note groove with rests — timing & space drill (root A)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "one_note_rhythm",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 1, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "technique": "vibrato", "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 60–72)**
- One set of Day 2's spider walk. Today, **tap your foot to the metronome click** while you play. The goal is feeling the beat in your body.
- Done when: your foot tap and the click never drift apart.

**10–20 min · Brain training (BPM 75) — rhythm dictation**
- Reproduce the rhythm from the tab above exactly, to a metronome at 75. There's only one note (A), so focus purely on **timing and rests.**
- Done when: your hand stops exactly on every rest, and the next note lands right on the beat. (If you can't stand the silence and fill in a note during a rest, that's a fail.)

**20–40 min · Real-world feel (BPM 75, Am backing track) — Week 0 wrap-up improv**
- Put on the backing track and **call in everything you've learned so far:** one note, two notes, 3rd sequences — freely. Just follow two disciplines:
  1. End every phrase landing on **R (A) or ♭3 (C).**
  2. Take **at least one full rest every two bars** (forced space).
- Done when: you complete a full loop, weaving in space deliberately, without freezing.

**40–50 min · Record & reflect (strongly recommended today)**
- Record 1 minute of the wrap-up improv above. Score yourself with the **3-point checklist (timing · landing · space)** above.
- If you have your "starting-point recording" from Day 1, listen side by side. Even in just four days, something's clearly changed. That difference becomes your fuel for next week.

## ④ Tips / Common Mistakes

- **Fear of silence.** Not being able to tolerate a rest, and constantly filling every gap with notes — that's the single biggest difference between beginner and intermediate players. A rest isn't "a mistake" — it's **part of the performance.** During a rest, the note you just played actually keeps ringing in the listener's ear.
- **Don't try to beat the metronome.** You're not "stomping" on the click — you're "laying" your notes on top of it. The goal is to line up so precisely that the click becomes inaudible.
- **Don't stress about recording quality.** Even a rough phone recording lets you hear timing, landing, and space perfectly well. It's not a pretty recording that builds skill — it's a **frequent** one.
- **Week 0 graduation check:** ① The daily warm-up routine feels natural in your hands. ② You can instantly spot R and ♭3 positions in the Am pentatonic Box 1. ③ You've bookmarked a few backing tracks. ④ You know how to record and listen back using the 3-point checklist. If all four are O, you're ready to launch into Month 1. Now, we step into the real world of improvisation.
