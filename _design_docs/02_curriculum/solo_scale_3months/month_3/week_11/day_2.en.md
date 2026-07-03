---
title: "Dorian Switching Over a Funk Backing Track + Tight Rest-Driven Phrasing"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
lang: en
---

# Day 2 — Funk: Snap Out the 3rd, Then Cut the Silence Clean

## ① Theory / Explanation

Here's why we're doing this today: if yesterday's blues was all about "dragging," funk is the exact opposite. It's **razor-tight, and rests are the star of the rhythm.** Even though you're still landing on the 3rd, you have to sing it completely differently in funk. New backing track, new phrasing — that's the whole point of this week.

Today's funk backing is a classic **Am7 → D9 vamp** — think Cissy Strut, Chameleon territory. When you hit a minor/modal vamp like this, what's the call? **Dorian.** So today's base camp is **A Dorian (A B C D E F# G)**, and it covers both chords by itself.

Here's today's "aha" moment. Dorian's signature note — the major 6th, **F# (♮6)** — happens to be the exact same note as **D9's 3rd.** So while you're playing around in Dorian, the moment the chord flips to D9, that color note F# automatically becomes your landing target. It's a bit of magic: one mode smoothly bridging two chords.

Switching by chord, here's how it breaks down:

- **On Am7 → aim for C (minor 3rd, ♭3).** This is the note that shapes Am7's whole expression.
- **Once it shifts to D9 → land on F# (major 3rd).** This F# is the very same note as A Dorian's ♮6 color tone.
- So switching = the call between **3rd string 5th fret (C) ↔ 2nd string 7th fret (F#).**

### 🎙️ Space & Phrasing Mini-Lesson — Funk Edition: Tight Rests & Staccato

In funk, space isn't "a pause" — **it IS the rhythm.** Here are the four things to grab today.

- **Precise rests (space):** On the 16th-note grid, funk needs "hit-rest-hit-rest" razor sharp. Yesterday's blues space was a "loose, drawn-out gap" — today's space is **silence cut exactly on the grid.** Keep every `rest` in the tab locked to its exact spot.
- **Short staccato:** Don't let notes ring — **snap them out and release your hand instantly.** Use your picking-hand palm mute (`palm_mute`) to choke off the tail. No exceptions for the 3rd either — keep it short.
- **16th-note subdivision:** Split even the same note, C, into two quick 16th-note "da-dat" hits — that's what turns it into a funk groove.
- **Dynamics & call-and-response:** A hard hit followed by a soft answer, or tossing out a short motif and leaving the "answer" as an empty rest — that contrast is funk's breathing room.

So today's the day you land on the 3rds of Am7 and D9 (C and F#) — but sing them tight, chopped up with palm-muted staccato and razor-clean rests.

## ② Visual Reference

First up, a **target note map** for the funk vamp. Inside one A Dorian shape, you can reach both Am7's ♭3 (C) and D9's 3rd (F#). Notice that **5th string, 9th fret F#** is labeled "6 (color)" — that's the double-agent note that's both Dorian's ♮6 and D9's 3rd at the same time.

```json
{
  "id": "m3.w11.d2.funk_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Funk target map Am7 -> D9 (A Dorian, b3 & major 3rd = Dorian nat6)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk vamp)",
    "scale": "A Dorian",
    "tempoBpm": 100
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 2, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "finger": 1, "label": "Am7-5(E)", "role": "chord_tone" },
      { "string": 3, "fret": 7, "finger": 3, "label": "D9 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D9-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6(color=D9-3 F#)", "highlight": true, "role": "color" }
    ]
  }
}
```

Second, today's **funk staccato phrase.** Notice how tightly the 16th notes and rests are woven together. In measure 1, over Am7, you **chop up C (♭3) with palm-muted hits, cutting to silence sharply in between.** Measure 2 switches to D9 — **snap out F# short**, then leave it empty with rests again. Having as many `rest`s as notes is exactly funk's identity.

```json
{
  "id": "m3.w11.d2.funk_staccato_phrase",
  "type": "tab",
  "meta": {
    "title": "Funk staccato phrase (Am7 C / D9 F#) with tight rests",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk)",
    "tempoBpm": 100
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "palm_mute", "label": "Am7-5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "Am7 R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "9(E color)", "highlight": true, "role": "color" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 100) — 16th-note 4-note sequence**
At the funk tempo of 100, roll through A Dorian as a **16th-note 4-note sequence.** Today's rule though: **mute the 4th 16th note of every beat short with your palm** to plant that "cutting" feel in your wrist. This isn't about sustaining sound — it's about **cutting it off precisely.**

**10–20 min · Brain training — mapping the Am7↔D9 3rd switch**
Keep the metronome at 100. On the target map, alternate between just two notes: **Am7→C (3rd string, 5th fret) ↔ D9→F# (2nd string, 7th fret).** One hit per click, short and palm-muted. When you fret F#, say out loud "this is D9's 3rd and also Dorian's ♮6." Pass the test once you can switch between the two notes with your eyes closed.

**20–40 min · Real-world improv (Am7–D9 funk vamp / 96–100 BPM) — tightness mission**
Put on "funk backing track Am7 D9" or "A Dorian funk vamp." Two missions. ① Switch 3rds between C↔F# whenever the chord changes. ② **Keep every note short with palm-muted staccato, cutting the rests exactly on the beat in between.** It's the exact opposite of yesterday — dragging is a fail, **snapping out short and resting clean** is a win.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your jam. Listen back for just two things — ① Did your 3rd switches match the chords? ② **Were the rests cut exactly on the beat grid (not dragging)?** Slow down playback if needed to zoom in on the placement of your 16th-note rests and the length of your staccato.

**Today's finish line:** Fret Am7's C and D9's F# palm-muted, eyes closed. Switch 3rds at least 6 times over the backing track, and keep the groove alive with precisely placed rests (palm-mute stops).

## ④ Tips / Common Mistakes

- **The habit of letting notes ring.** Yesterday's blues habit is poison today. Funk is short and snappy. Kill the landed 3rd with your palm mute immediately. It's silence, not sustain, that makes the groove.
- **Glossing over the rests.** In funk, rests are the skeleton of the rhythm. Drill **"where to rest"** into your body before "where to hit." Sloppy rests and the whole groove collapses.
- **Playing too many notes.** Even if your hands are itching, hold back. Funk comes alive when a couple of notes, plus a rest-filled gap, lock in with the bass and drums.
- **Thinking of F# only as D9's 3rd.** It's also Dorian's ♮6 color tone at the same time. Once you know this double identity, you can even slip F# in as a color note during the Am7 section to smooth out the vamp.
