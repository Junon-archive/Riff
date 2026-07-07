---
title: "Ghost notes — no pitch, yet the groove comes alive"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — The "chuck" is what makes the groove

## ① Theory

The real secret of funk groove isn't the notes you play — it's the sounds you *don't* play. They're called **ghost notes.**

A ghost note is played with the left hand fully relaxed, fingers merely resting on the strings. No pitch rings — just a percussive, pitchless "chuck" or "chick." On a drum kit it's the hi-hat: not melody, but the grain that fills the rhythm.

Funk's groove comes precisely from this **contrast between real notes and ghosts.** A clear "ta" (left hand pressed, ringing) against a dead "chick" (relaxed, choked). Alternate them — "ta-chick-chick-ta" — and a flat run of 16ths suddenly starts to grind like a drum. The right-hand motor is exactly Week 1's. The only thing that changes is one thing: **left-hand pressure** — press (ta), release (chick).

At first the ghost will ring too loud, or make no sound at all — that's normal. The feel of releasing "just enough to choke it" takes a few days. Don't rush. Today, just telling "ta" from "chick" clearly by ear, from the same hand position, is enough. The moment this ta/chick contrast settles into your hand, your strumming stops being a flat chord and starts turning into a percussion instrument that plays rhythm. Today you only need to fasten that first button.

## ② Visuals

From one hand position, contrast the sound by changing only left-hand pressure. In the examples below, **a note (blue) is a real "ta"** (left hand pressed); a muted note is a ghost "chick" (relaxed).

**Example 1 — ta-chick-chick-chick (1 bar).** Only the first sixteenth of each beat is a real note; the other three are ghosts. The real note clearly marks the beat.

```json
{
  "id": "m1.w2.d1.contrast_1bar",
  "type": "tab",
  "meta": { "title": "Real vs ghost — contrast (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 64, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 64.** Count "ta-chick-chick-chick" aloud, 4×. Check by ear that "ta" (real) and "chick" (ghost) sound clearly different.

**Example 2 — real note on the off-beat (2 bars).** Put the real note on the "and," not the beat. A slightly delayed "ta" makes the groove grind.

```json
{
  "id": "m1.w2.d1.ghost_offbeat",
  "type": "tab",
  "meta": { "title": "Real on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 64, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 64.** "Chick-chick-ta-chick." Enjoy the real note landing off the beat. Repeat 4×.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Left fingers resting and relaxed, mechanically repeat 16th ghost scratches. Right-hand motor exactly as in Week 1.

**10–20 min · Brain training (today's target = telling ta from chick)**
Count "ta-chick-chick-ta" aloud, distinguishing real from ghost as you split the beat. Decide in advance when to add and release left-hand pressure.

**20–40 min · Real groove (Examples 1·2 / BPM 64)**
Repeat **Example 1** (ta-chick-chick-chick) 4× at BPM 64 → then **Example 2** (off-beat real note). The key is hearing the contrast of real vs ghost.

**40–50 min · Record & reflect (recommended)**
Record and check: did ghosts come out cleanly as pitchless "chucks" / is the contrast with real notes audible / did the right hand never stop?

**Done when:** from one hand position, you can clearly tell a real note ("ta") from a ghost ("chick") using left-hand pressure alone.

## ④ Tips / common mistakes

- **Ghost rings too much.** The left hand isn't relaxed enough. Rest, don't press. If pitch leaks, it fails.
- **No ghost at all.** Either the right hand missed the strings or the left lifted off. The fingers must touch the strings for the "chuck."
- **Right hand stops.** Fixating on real notes breaks the motor. Whatever the left does, the right keeps going.
- **Greed for speed.** If the contrast isn't audible it's pointless. Slow, with a clear ta/chick.
