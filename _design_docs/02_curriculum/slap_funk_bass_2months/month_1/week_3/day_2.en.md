---
title: "Thumb-Ghost-Pop — Slap, Chick, Pop as One"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Thumb-Ghost-Pop, Slap-Chick-Pop as One

## ① Theory

Today you use yesterday's **clean ghost ("chick")** as groove material. Today's goal is **thumb-ghost-pop** — that is, joining the three strikes **thumb (boom)-chick-pop (snap)** into one flow. These three beats are the <mark>heart</mark> of this week's groove.

Picture the order in sound. Thumb the **root E (4th string)** for "boom," immediately a left-hand ghost — **"chick" on the 3rd string** — then the index finger pops the **octave (2nd string, 2nd fret)** for "snap." In drum terms it's like <mark>kick-hi-hat-snare</mark> passing by in order. That one "chick" fills the gap between boom and snap, and two flat notes suddenly start to roll.

Today, don't overreach — focus only on **making thumb-ghost-pop flow steadily**. Put one **rest** after the three strikes so the hand has room to set up the next bundle. At **BPM 60**, spread the three strikes wide in quarters, then string them densely in eighths at **BPM 65**. Whether the <mark>three are evenly spaced</mark> is what counts. At first the pop tends to rush in, so widen them while counting the **"chick" as its own independent strike**. Once the three each hold their place, the speed comes on its own afterward.

On **a 5-string**, the notes and hand shape are the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, try the same thumb-ghost-pop on a heavier low string too. Today, carve just one feel into your hand — the three strikes connecting smoothly. Once these three lock into one today, this week's groove is nearly all in place before your eyes.

## ② Visuals

First, retrace the **octave hand shape** — the lower blue is the root E you slap with the thumb, the upper blue is the octave E you pop. The "chick" between them comes from laying the left hand on the 3rd string. After checking the shape, string <mark>slap-chick-pop</mark> wide in quarters, then densely in eighths. Each example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root E below (thumb), octave E above (pop). The "chick" between them comes from the 3rd string.

```json
{
  "id": "m1.w3.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb.

**Example 1 — thumb-ghost-pop quarters.** Spread the three strikes one beat wide each. Thumb (boom)-chick-pop (snap), then one rest.

```json
{
  "id": "m1.w3.d2.tgp_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Boom (T)-chick-snap (P)-rest. Check slowly that the three are evenly spaced.

```json
{
  "id": "m1.w3.d2.tgp_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5-string.** Note and hand shape are the same as on a 4-string. Keep the low B deadened with the thumb.

**Example 2 — thumb-ghost-pop eighths.** Now densely. Put <mark>slap-chick-pop-rest</mark> twice per measure.

```json
{
  "id": "m1.w3.d2.tgp_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** Let boom-chick-snap flow within each beat. Even faster, don't let the "chick" smear.

```json
{
  "id": "m1.w3.d2.tgp_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5-string.** Same notes as the 4-string. Here too, keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Make the "chick" from yesterday a few times at BPM 60 to wake the hand. Check by ear again that there's no pitch.

**10–20 min · Brain training**
Play slap-chick-pop very slowly, one strike at a time. Check one by one <mark>whether the three sounds are clearly different in character</mark> (boom, chick, snap).

**20–40 min · Real play**
Repeat Example 1 (quarters) at **BPM 60** → once the three strikes are even, move to Example 2 (eighths) at **BPM 65**. If the flow tangles, drop back to quarters.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether boom-chick-snap comes through clearly in order</mark>. Note the BPM you reached today.

**Done when:** you can flow thumb (root)-ghost ("chick")-pop (octave) at BPM 60–65 with the three strikes evenly connected, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The "chick" vanishes.** Fussing only over boom and snap buries the middle ghost. Stamp the "chick" clearly as its own strike too.
- **The pop rushes.** If the pop slams in right after the "chick," the flow tangles. Drop to quarters and widen the spacing of the three first.
- **The hand shape wobbles.** If the octave shape loosens while you make the ghost, the pop misses. Keep the shape and only lay-and-lift the left hand lightly.
- **Neglecting low B (5-string).** As the hand gets busy, B leaks easily. Always keep B covered with the thumb.
