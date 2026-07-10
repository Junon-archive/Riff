---
title: "T-P Evenness — Boom-Snap Like Clockwork"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — Boom-Snap Like Clockwork, Even T-P

## ① Theory

You open the door to Week 2. If last week you first alternated the **thumb (boom)** and the **pop (snap)**, this week you weave the two into a <mark>groove</mark>. The first step is today's **even T-P**. Set flashy lines aside and focus on just one thing — alternating **boom-snap with the same size and same spacing, like clockwork**.

Today, set the octave hand shape aside for a moment and practice with the two easiest **open notes**. The thumb plays **open E (4th string)**, the pop plays **open G (1st string)** — the left hand rests. So you can put all your focus on <mark>the balance of the two right-hand moves</mark>. Thumb "boom" below, finger "snap" above — just that round trip.

Today's real teacher is the **metronome**. The boom must land **right on the beat**, and the snap **right on the next beat**. If either rushes or drags, the groove limps. The feeling of <mark>boom-snap becoming one with the metronome</mark> is the whole point today. At **BPM 60**, slowly, let the two sounds trade back and forth evenly and cleanly. Recall the idea that runs through this week — **slap is a drum kit**. The thumb is the kick, the pop is the snare. Just as a drummer never drops the beat, your boom-snap today comes down first to not missing the beat.

On **a 5-string**, the open-note positions are exactly the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, try the same round trip on a heavier low string too. Today, drop the craving for speed and carve just one thing into your hand — **evenness**.

## ② Visuals

Today you barely use your left hand — you alternate **open E** with the thumb and **open G** with the pop. First check the two strike spots on the fretboard, then round-trip <mark>boom-snap steadily</mark> in quarters before tightening into eighths. Each example comes in **both a 4-string and a 5-string version**.

First, the **T-P strike map**. The lower blue dot is the E (4th string) you slap with the thumb; the upper is the G (1st string) you pop.

```json
{
  "id": "m1.w2.d1.tp_open_spots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The lower blue dot is the root E (4th string, thumb), the upper is G (1st string, pop). Fix the two spots in your eyes.

```json
{
  "id": "m1.w2.d1.tp_open_spots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Keep the low B deadened with the thumb so it stays silent.

**Example 1 — T-P quarters.** Alternate once per beat. The **T** on the score means thumb, the **P** means pop.

```json
{
  "id": "m1.w2.d1.tp_quarter_4",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** One boom (T) on the metronome beat, one snap (P) on the next. Check by ear that the two sounds are equal in size.

```json
{
  "id": "m1.w2.d1.tp_quarter_5",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb.

**Example 2 — T-P eighths.** Split each beat in two and round-trip eight times. Even as it speeds up, only push to the point where <mark>the boom-snap sizes don't fall apart</mark>.

```json
{
  "id": "m1.w2.d1.tp_eighth_4",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** One boom-snap pair per beat. Even faster, don't let the two sounds smear.

```json
{
  "id": "m1.w2.d1.tp_eighth_5",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same notes as the 4-string. Here too, keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up the **thumb (open E)** and the **pop (open G)** you've learned so far, each a few times at BPM 60. Check that both sound-hands are awake.

**10–20 min · Brain training**
Alternate T-P very slowly. Focus only on the timing — <mark>whether the boom and snap land exactly on the metronome</mark>.

**20–40 min · Real play**
Repeat Example 1 (quarters) at **BPM 60** → once the boom-snap is even, move to Example 2 (eighths) at **BPM 65**. If the sizes misalign, drop back to quarters.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the boom and snap alternate at the same size</mark>. Note the BPM you reached today.

**Done when:** you can alternate the T-P of open E (thumb) and open G (pop) at BPM 60–65, at the same size, landing steadily on the metronome.

## ④ Tips / Common mistakes

- **Pop too loud.** The pop pops out, so it easily sounds louder. Give the thumb a bit more push and match the two sizes.
- **Snap arrives late.** If the snap lags after the boom, the groove limps. Go back to slow quarters and smooth the round trip.
- **Craving speed.** If the sizes misalign at 60 and you push higher, it all falls apart. This week too, balance comes first.
- **Neglecting low B (5-string).** As the hand gets busy, B leaks easily. Always pass with the thumb covering B.
