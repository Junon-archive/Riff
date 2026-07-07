---
title: "Rhythm challenge — same chord, different groove"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — Where you hit and where you leave space is the groove

## ① Theory

So far you learned "which notes to grab" (voicing). Today it's "**which rhythm to play.**" Even the same chord, when you change **where you hit and where you leave space (rests)** and the **muted cut (palm mute),** gives a completely different groove. The life of R&B, funk, and soul is actually the **rhythm** more than the voicing.

Three keys:
- **Rests are rhythm.** The spaces where you leave silence are the groove's breath.
- **Palm-mute cutting (P.M.).** Choke it short for a "chk" attack.
- **Syncopation.** Push slightly ahead of or behind the beat to make the body move.

Today you play one Cmaj7 shell with two grooves and feel that just changing the rhythm changes the song. This is where the real fun begins — one and the same chord turns into a ballad or into funk depending only on the rhythm. It's fine if it's rough. Today isn't about playing it "wrong"; it's about enjoying playing it "differently."

## ② Visuals

**Cmaj7 shell** to lay today's groove on (R·3·7). Blue root, green guide tones (7·3).

```json
{
  "id": "m2.w8.d2.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — Groove A (staccato + rests).** Short hits with rests between — R&B comping. The P.M. is a cut.

```json
{
  "id": "m2.w8.d2.groove_a",
  "type": "tab",
  "meta": { "title": "Groove A (staccato + rests) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 84, repeat 4×.** "Chunk — (rest) — chk — chord — (rest)." Leave the rests clearly empty and choke the P.M. short. Play the Cmaj7 shell in this rhythm.

**Example 2 — Groove B (syncopation).** Same chord, different rhythm. Push the beat slightly so the body sways.

```json
{
  "id": "m2.w8.d2.groove_b",
  "type": "tab",
  "meta": { "title": "Groove B (syncopation) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 84, repeat 4×.** Completely different feel from Groove A, right? Same Cmaj7, only the rhythm changed. Pick whichever fits the song.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret the Cmaj7 shell and learn Groove A's rhythm by hand. Empty the rests clearly, and check the P.M. cut is short.

**10–20 min · Brain training (today's target = rests & cuts)**
To a metronome, alternate Grooves A and B. Count "hit / rest / choke" spots out loud to burn them in.

**20–40 min · Real comping (Examples 1 & 2 grooves / 80–90 BPM)**
Lay **Examples 1 & 2 at BPM 84** over a backing. Apply Groove A (or B) to yesterday's whole ii–V–I and spin the four-bar loop. Feel how much the same progression changes with rhythm.

**40–50 min · Record & reflect (recommended)**
Record 15 seconds each of Grooves A & B and compare. Check: do the rests make the groove / is the P.M. cut clear / does the body sway?

**Done when:** you can play the same Cmaj7 shell with two grooves (staccato+rests / syncopation) and understand that rhythm changes the song's feel.

## ④ Tips / common mistakes

- **Chunk-chunk-chunk uniform.** Filling every beat with no rests kills the groove. The empty spots are the key.
- **Long, no P.M.** Without cutting, you don't get the R&B/funk feel. Practice choking it short.
- **Shaking the chord while changing rhythm.** Don't let the voicing collapse while focusing on rhythm. Left hand fixed, right hand does the rhythm.
- **Only one groove.** Play the same progression with several rhythms. That's the first step to "composing" a comp.
