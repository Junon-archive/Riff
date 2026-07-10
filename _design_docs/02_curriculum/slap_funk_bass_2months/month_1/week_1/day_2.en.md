---
title: "Thumb String Change — Moving Between E and A"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — Thumb String Change and Muting

## ① Theory

If you got your first "boom!" on open E yesterday, you're halfway there. Slap isn't fingers, it's a drum — remember, **the thumb is the kick, the ghost note is the rest that fills the gap**. Today you add two things — **slapping across strings (E↔A)** and slap's real hurdle, **<mark>muting (silencing the strings you don't play)</mark>**. Only when these two join does the thumb turn from "practice" into "groove."

Moving strings is easier than it looks. **The forearm rotation stays exactly as yesterday**; only the target string changes. Open E is the **4th string**, open A is the **3rd string** just above it. Keep the wrist still, shift the thumb inward by one string, and slap at the same angle — A booms just the same. Don't swing the whole forearm; the trick is to <mark>keep the thumb's travel distance minimal</mark>.

But slap is loud and full of open strings, so left alone, **even the strings you didn't play ring out** and get muddy. That's why muting is essential. **The left hand** lays fingers flat and rests lightly on the unused strings to deaden them, while **the right thumb** covers the strings lower than the one you're playing. Both hands must guard like gatekeepers so only one note stays clear. Add a pitchless **<mark>ghost note ("chick")</mark>** in between, and the silence itself becomes rhythm — it's marked as X on the score.

On **a 5-string** there's one more string to deaden. Keep the thumb over the low B so it never rings out while you move between E and A. The E·A positions are **exactly the same as on a 4-string**, so a 5-string just asks for a little more muting care.

## ② Visuals

Today you see **three examples**. First check the E and A spots on the fretboard, then <mark>move across the two strings</mark> with the thumb, and finally learn muting with a ghost note. Each example comes in **both a 4-string and a 5-string version**.

First, the **E·A thumb strike map**. The two blue dots are open E (4th string) and open A (3rd string).

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **4-string.** The lower blue dot is open E (4th string), the upper blue is open A (3rd string). Shift the thumb by one string and slap at the same angle.

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **5-string.** The E·A spots are the same as on a 4-string. Rest the thumb on the low B to keep it deadened as you move between the two.

**Example 1 — thumb string change E↔A.** Slap open E and open A alternately. The thumb travels the shortest distance between the two strings.

```json
{
  "id": "m1.w1.d2.thumb_ea_move_4",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Alternate open E (4th string) → open A (3rd string) with the thumb. Check by ear that both "boom"s are equal in size.

```json
{
  "id": "m1.w1.d2.thumb_ea_move_5",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Rest the thumb on the low B so it doesn't ring out while moving.

**Example 2 — thumb + ghost.** Alternate an open E thumb slap with a ghost note (X). The clearer the silence of <mark>"boom-chick-boom-chick"</mark>, the more the groove comes alive.

```json
{
  "id": "m1.w1.d2.thumb_ghost_4",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** On the beat, a blue open E thumb slap; off the beat, X (chick). The bigger the size gap between thumb and ghost, the clearer the rhythm.

```json
{
  "id": "m1.w1.d2.thumb_ghost_5",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same notes as the 4-string. Keep the thumb over the low B so it doesn't ring along even when you play the ghost.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up yesterday's open E thumb slap at BPM 60. First check **whether the "boom" tone is as even as yesterday**.

**10–20 min · Brain training**
Move very slowly between open E and A. Focus only on <mark>whether the thumb shifts by just one string</mark> — that **minimal travel**.

**20–40 min · Real play**
Repeat Example 1 (E↔A move) at **BPM 60** → once both "boom"s are even, move to Example 2 (thumb + ghost) at **BPM 65**. If unplayed strings ring out, go back to Example 1.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **only the played string rings and the rest stay silent**. Note the BPM you reached today.

**Done when:** you can move between open E and A with the thumb at 60–65 with both "boom"s even, and the unplayed strings staying quiet.

## ④ Tips / Common mistakes

- **The thumb moves too much.** If the thumb flies far when crossing strings, the beat drags. Shift it by just one string, minimally.
- **Unplayed strings ring out.** If A·D·G ring while you play E, lay the left hand lightly over those strings to deaden them.
- **Ghost note too hard.** Hitting the chick too hard revives the pitch and gets messy. Very lightly, only the muted attack sound.
- **Neglecting low B (5-string).** If you lose B while focused on string changes, the low end leaks. Always keep the thumb resting over B.
