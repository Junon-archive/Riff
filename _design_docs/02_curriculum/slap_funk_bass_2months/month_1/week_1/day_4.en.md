---
title: "Thumb Meets Pop — Your First Slap Sound"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — Thumb Meets Pop, T-P Alternation

## ① Theory

At last, the final day of Week 1 — and the week's highlight. You take the **thumb (boom)** and the **pop (snap)** you learned separately and **<mark>alternate them for the first time</mark>**, making your very first "slap sound (T-P)." Like a kick and a snare meeting to become a drum beat, this is the moment the two sounds join into one. The two sounds that ran separately all week **start a conversation within one hand** today for the first time.

How do you pair the two sounds? The most basic way is the **octave**. Slap the **root E (open 4th string) with the thumb**, then pop the **E an octave up (2nd string, 2nd fret)**. Why the octave? The pop catches best on high strings, and the octave-up E sits right **over on the thin-string side**, so the hand spreads naturally. Thumb on the lower 4th string, index/middle on the upper 2nd string — this <mark>octave hand shape</mark> is the most common basic slap form.

The rhythm is very simple. **Boom (thumb)-snap (pop)-boom-snap**, alternating steadily in quarter notes. Never rush — today's goal is not speed but **<mark>the two sounds alternating at the same size</mark>**. **BPM 60**, slowly. When the thumb and pop tones flow evenly, that's the seed of a slap groove.

On **a 5-string**, the fingering is exactly the same as on a 4-string. Just keep the low B deadened with the thumb, and once you're comfortable, try moving the same groove **to a B-string root** for a heavier low slap. All right, let's connect the two sounds you built this week into one.

## ② Visuals

Today you build **this week's completed piece**. First learn the octave hand shape on the fretboard, then match the T-P in a slow prep version, and finally run the <mark>pinned T-P alternation</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **octave hand-shape map**. The lower blue is the root E (4th string) you slap with the thumb; the upper blue is the octave E (2nd string, 2nd fret) you pop.

```json
{
  "id": "m1.w1.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The lower blue is the root E (4th string, thumb slap), the upper blue is the octave E (2nd string, 2nd fret, index/middle pop). Fix this hand shape in your eyes.

```json
{
  "id": "m1.w1.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, move this groove to a B-string root too.

**Prep — slow T-P.** Hold the root E (thumb) and octave E (pop) for half a measure each. First get the feel of alternating the two sounds.

```json
{
  "id": "m1.w1.d4.tp_prep_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Root E with the thumb (boom), octave E with the pop (snap), held half a measure each. Don't rush; just get the feel of alternating the two sounds first.

```json
{
  "id": "m1.w1.d4.tp_prep_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb so it doesn't ring out as you move through the T-P.

**This week's completed piece — slow thumb-pop alternation.** Now in quarter notes. Alternate thumb (boom)-pop (snap) steadily. <mark>Balance of the two tones over speed</mark> comes first.

```json
{
  "id": "m1.w1.d4.tp_alternation_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, slowly.** Alternate thumb (boom)-pop (snap) steadily. The thumb strikes and rebounds off the string; the pop hooks the octave with a finger and snaps it.

```json
{
  "id": "m1.w1.d4.tp_alternation_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. **On a 5-string**, keep the low B deadened, or try the same groove on a B-string root for a heavier feel.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up yesterday's pop (open G) and the day before's thumb (open E), each at BPM 60. Check that **both sound-hands are awake**.

**10–20 min · Brain training**
Take the octave hand shape and repeat the prep example (slow T-P) very slowly. Focus only on the **connection** — <mark>whether the hand moves naturally from thumb to pop</mark>.

**20–40 min · Real play (this week's piece)**
Repeat the pinned T-P alternation at **BPM 60**. The goal is the two sounds alternating clearly at the same size — don't try to speed up, just keep the **tone balance**. Learn it on the 4-string, then confirm the same feel on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the boom (thumb) and snap (pop) alternate at the same size**. Note the BPM you reached this week.

**Done when:** you can play the slow thumb-pop alternation (T-P) at BPM 60 with the two sounds alternating clearly at the same size, on both a 4-string and a 5-string. (Week 1 complete!)

## ④ Tips / Common mistakes

- **Pop too loud.** The pop pops out, so it easily sounds louder. Give the thumb a bit more push and match the two sizes.
- **Hand moves too late.** If the pop lags after the thumb, the beat drags. Go back to the prep example and smooth the connection slowly.
- **Craving speed.** If the two tones misalign at 60 and you push higher, it all falls apart. As all week, balance comes first.
- **Neglecting low B (5-string).** Keep B deadened with the thumb throughout the T-P. As the hand gets busy, B leaks easily.
