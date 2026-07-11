---
title: "The boogie riff — walking with 5th, 6th, b7"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Walking up bouncily with R-5-6-b7

## ① Theory

You got the two hand shapes (root+5th, root+6th) under your fingers yesterday, right? Today we add just one note, the **b7 (4th string, 5th fret)**, to complete a real **boogie riff**. That motion of walking up bouncily from the root — 5th → 6th → b7 — is <mark>the sound of the blues 'walking.'</mark> The moment that one b7 is added, a slight 'taste of tension' appears in the plain riff, making it far more bluesy.

The whole motion happens on the single 4th string. **2nd fret = 5th**, **4th fret = 6th**, **5th fret = b7** — keep the open A on the 5th string (the root) laid down and just walk the top finger up. For fingering, use index for the 5th, ring for the 6th, and your **pinky** for the b7 to make the stretch easy.

Let's look at the map your hand will walk first.

```json
{
  "id": "m1.w1.d3.boogie_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie map on the 4th string — 5, 6, b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **On the 4th string, 5→6→b7.** Over the open A of the 5th string, index, ring, and pinky walk up in order.

The classic boogie order is **R-5-6-b7-6**. Walk up, then dip back to the 6th to close the bar, and out comes that famous 'chug-a-chug-a' groove. Today's goal is to connect this <mark>one bar smoothly</mark>.

It's fine if your pinky can't reach the b7 yet. Push your wrist slightly forward and it gets much easier. Today the goal is **not dropping a single note** rather than speed. Once this one bar sticks in your hand, tomorrow you'll stack the shuffle on top for the <mark>complete A7 boogie</mark>. Today isn't a speed contest; it's all about the 'connection' of joining four notes neatly. The slower you go, the faster it actually sticks.

## ② Visuals

Now let's move the map into sound. In straight quarter notes, one bar of **R+5 → R+6 → R+b7 → R+6**. (Tomorrow we stack the shuffle on this.)

```json
{
  "id": "m1.w1.d3.boogie_1bar",
  "type": "tab",
  "meta": { "title": "A7 boogie riff — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 70, shuffle it.** Keep the open 5th string held down and open and close your fingers on the 4th string. If a <mark>bouncy feel</mark> comes out, you've got it.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 55. Loosen your hand by alternating yesterday's two double stops (5th, 6th). Check that <mark>the root keeps ringing</mark>.

**10–20 min · Brain training (today's target = adding the b7)**
On the hand that's used to the 5th and 6th, lay only the new **pinky b7** on top. Shuttle 5→6→b7 without sound.

Use the half-note version below to check all four notes one by one, clearly.

```json
{
  "id": "m1.w1.d3.boogie_slow",
  "type": "tab",
  "meta": { "title": "Boogie connection — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 55, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 55, shuffle it.** Hold R+5, R+6, R+b7, R+6 each long. Listen for every double stop ringing.

**20–40 min · Real boogie (one bar / BPM 70)**
Repeat the R-5-6-b7-6 bar **without a break**. Watch whether <mark>your fingers walk without snagging</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check: <mark>can you hear all four notes</mark> / <mark>does it not break at the b7</mark>.

**Today's completion criteria:** You can connect one bar of the R-5-6-b7-6 boogie riff at BPM 70 without dropping a note.

## ④ Tips / Common mistakes

Here are just the spots that tend to jam up in the boogie riff.

```json
{
  "id": "m1.w1.d3.pinky_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "Pinky reach — b7 at fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **6th→b7 with the pinky.** Place the pinky (5th fret) right next to the ring finger (4th fret).

- **The b7 won't press.** Your pinky lacks force. Push your wrist forward and stand the pinky tip up.
- **The riff smears.** Pre-spreading all fingers overlaps the notes. Press only at the needed moment.
- **The root disappears.** Fussing over the top fingers, you miss the open A. Keep the 5th string alive always.
- **The beat rushes.** Reaching to the b7 makes you hurry. Slow is fine — keep all five notes even.
