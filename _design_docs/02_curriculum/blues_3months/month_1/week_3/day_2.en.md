---
title: "Stop-time — stab and go silent to make drama"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Stab and silence: make space with stop-time

## ① Theory

Day two. If yesterday you added color with A9, today you learn the **space**. Today's topic is **stop-time**. <mark>Stop-time is a rhythm where you hit a chord "stab!" and then cut the sound dead to make silence.</mark> The instant the whole band hits once and holds its breath, the listener starts waiting for the next sound. That's why space is as important as sound, and sometimes more. Good playing is completed not by how many notes you fill in, but by where you leave empty. It's just like speaking — a pause and a beat of silence make your words land clearly.

On the score, silence is marked with a **rest**. In our data, `rest` is that silence. <mark>After hitting the chord, if you slightly release your fretting hand to stop the strings, the sound cuts off and a rest is born.</mark> Your picking hand keeps counting the beat, but the strings stay silent. This **hit-and-stop** is all there is to stop-time.

Today's chord is the familiar **A7**. You're not learning a new chord — you're changing only the **rhythm** with a chord you already know. <mark>Stab on beat 1, silence on beat 2 — making this one bar dramatic is today's goal.</mark> It's fine if the silence feels awkward. That awkward empty spot is exactly the tension of blues. In fact, once you can enjoy that empty spot, your playing gets a lot more relaxed.

Let's start with the simplest stop-time. Hit once, and the rest is all silence.

```json
{
  "id": "m1.w3.d2.stoptime_intro",
  "type": "tab",
  "meta": { "title": "One stab, then silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** Stab A7 on beat 1, and leave the remaining three beats completely empty with `rest`. Feel the length of this silence.

## ② Visuals

Today's finish-line goal is **one bar of stop-time**. <mark>Stab A7, then leave the next beat empty with no sound.</mark> This "hit-and-empty" repeats twice.

```json
{
  "id": "m1.w3.d2.stoptime_two_stabs",
  "type": "tab",
  "meta": { "title": "Stop-time — two even A7 stabs", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** **Stab A7 on beat 1 → silence on beat 2 → stab on beat 3 → silence on beat 4.** Release your fretting hand so the strings don't ring on the empty beats.

The hand doesn't stop on the rest — only the sound stops. <mark>Your foot has to keep stomping all four beats so the next stab lands in its spot.</mark>

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Play **A7** filling all four beats fully first, to get the "full" feel of continuous sound into your body.

Now the opposite — play a stop-time that **starts on silence**.

```json
{
  "id": "m1.w3.d2.stoptime_silence_first",
  "type": "tab",
  "meta": { "title": "Stop-time — start on silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** **Silence on beat 1 → stab on beat 2 → silence on beat 3 → stab on beat 4.** Starting on an empty beat makes the next stab stand out more.

**10–20 min · Brain training (today's target = releasing on the rest)**
The motion of releasing your fretting hand right after hitting the chord — <mark>practice it slowly on its own.</mark> Stab-release, stab-release.

**20–40 min · Real stop-time (BPM 80)**
Alternate the two examples above and repeat them <mark>without a break</mark>. Check that the strings don't leak and ring on the empty beats.

**40–50 min · Recording / self-feedback (recommended)**
Record one bar of stop-time: <mark>is the silence truly quiet</mark>.

**Today's completion criteria:** With the familiar **A7**, you can clearly play one bar of stop-time that repeats "stab → silence" with a shuffle.

## ④ Tips / Common mistakes

The most common mistake in stop-time is that **the silence isn't really silent**.

```json
{
  "id": "m1.w3.d2.mute_for_rest",
  "type": "fretboard_diagram",
  "meta": { "title": "Release to silence the strings on the rest", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **Release the pressure on the rest.** Don't lift your fretting hand off the strings — just ease the pressing pressure a bit, and the sound stops.

- **The rest rings.** If you don't release the fretting pressure, the chord keeps ringing and the silence vanishes.
- **The tempo rushes.** If the silence feels awkward and you hurry, the next stab comes early. Keep stomping your foot.
- **Lifting the hand fully off.** If you take your hand off the strings entirely, the open strings ring. Keep it lightly resting and only release the pressure.
- **Only hitting hard.** Even a stab gets messy if it's too much. This connects to the dynamics you'll learn tomorrow.
