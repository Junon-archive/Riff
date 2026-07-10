---
title: "Changing between two chords over the drums"
dayKey: "m1.w3.d3"
estMinutes: 30
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — Two-chord changes, following the root

## ① Theory

Up to yesterday you rolled an eighth root line over one chord. But a real song doesn't stay on one chord — **the chord changes every few measures**, and the bass root has to move along with it each time. Today's goal is to **<mark>follow the root and move to a new seat when the chord changes</mark>**, and to do it without a wobble while the drums keep turning.

Today's two chords are **E and A**. **The root of E is the open 4th string, and the root of A is the open 3rd string.** When the song goes from E to A, both hands just cross **up one string (4th → 3rd)**. The change happens right at **the boundary between two measures** — the first beat of the new measure. The key is for **<mark>the new root to drop exactly with the kick</mark>** on that first beat.

The most common mistake in a change is **the beat dragging**. Fumble with your hand while switching chords and the first note of the new measure comes late. So week 2's muting proves its worth here too — you **<mark>rest the last note of the old chord while at the same time crossing just your fingertip to the neighboring string</mark>**. Don't swing your hand wide; **move the right thumb along too** to cover the unplayed strings. The drum's kick doesn't rest when the chord changes, so you too carry on to the new root **without missing the beat for even an instant**.

This change too is **identical in hand shape on a 4- or 5-string**. E is the 4th string and A is the 3rd, the same spots on both basses. On a 5-string, keep the low B (5th string) covered with your thumb throughout the move so it doesn't leak while you're absorbed in the change. Today, rather than speed, just leave one thing in your hand: **a clean change**.

## ② Visuals

Today you learn the **two-chord change in two stages**. First move slowly between each chord a measure at a time to <mark>refine the seam</mark>, then join E→A with eighth-note roots. Each example is laid out in **both a 4-string and a 5-string version**.

**Example 1 — change prep (quarters).** Measure 1 is the open E four times, measure 2 the open A four times. Feel whether the root splits smoothly at the instant the measure changes.

```json
{
  "id": "m1.w3.d3.two_chord_prep_4",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Blue E (4th string) → A (3rd string). On the first beat of measure 2, rest the old E and cross just your fingertip up one string.

```json
{
  "id": "m1.w3.d3.two_chord_prep_5",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** The fingering is identical to the 4-string. Cover the low B with your thumb to keep it asleep.

**Example 2 — two chords in eighths.** Now play each chord eight eighth notes each. Roll one measure of E, then cross over **to A on the first beat of the next measure** with no drag.

```json
{
  "id": "m1.w3.d3.two_chord_eighths_4",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** E (eight eighths) → A (eight eighths). At the seam of the change, **don't let the beat drag**; lay the new root right onto the kick.

```json
{
  "id": "m1.w3.d3.two_chord_eighths_5",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, 5-string.** The notes and positions are identical to the 4-string. Even as it speeds up, keep the low B covered with your thumb so it doesn't leak.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Loosen up yesterday's pocket eighth roots at BPM 70. Warm your hand while checking that **the eighths are even and the rest stays alive**.

**7–17 min · Today's skill**
Repeat Example 1 (change prep) at BPM 70. Focus only on <mark>whether the beat drags at the E→A seam</mark>, resting the old note and crossing just your fingertip.

**17–27 min · Applying it**
Play Example 2 (two chords in eighths) four times at BPM 70 → once clean, raise it to BPM 75 for four more. Check that **the first beat isn't late at the change**.

**27–30 min · Check**
Write down the BPM you reached, and record 30 seconds to hear whether **the beat holds when the chord changes**.

**Done when:** you can change between the two chords E and A over the drums, without dragging the beat as the measure turns, cleanly at 70–75 on both a 4- and 5-string.

## ④ Tips / common mistakes

- **The beat drags at the change.** Fumble with your hand while switching chords and the first note of the new measure comes late. Prepare the next string in advance on the last note of the old measure.
- **Swinging the hand wide.** Move the whole arm and you get slow and inaccurate. Cross just your fingertip to the neighboring string.
- **Losing the muting at the moment of change.** Let the old chord keep ringing and the two roots smear together. Always rest the old note just before the move.
- **Getting careless with the low B (5-string).** Get absorbed in the change and the B leaks easily. Keep your thumb resting on the B even mid-move.
