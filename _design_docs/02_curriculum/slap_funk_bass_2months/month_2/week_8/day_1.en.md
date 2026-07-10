---
title: "Bringing It Together — Octave, Ghost, Pop in One Measure"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — Bringing It Together, Octave, Ghost, Pop in One Measure

## ① Theory

At last, **Week 8** — the final week! Eight weeks ago even one slap note was hard, and now you hold <mark>the octave, the ghost, and the pop</mark> in one hand. This week you melt the pieces you've learned into **one groove** and complete a graduation piece that smells of classic funk. Today, Day 1, is the first button: you lay a **pop fill** over an **octave + ghost groove** to build exactly one measure.

The skeleton of the groove is already familiar. Thumb the open **E** on the 4th string (**R**), fill the gap with a **ghost**, then pop the octave **E** at the 2nd fret of the 2nd string (**8**). This <mark>thumb-ghost-pop</mark> rolls like a drum's kick and snare. Today, after this groove, you top off the measure with a **b3-4-5** pop fill on the 1st string.

The pop fill doesn't need to be flashy. Pop b3 (open), 4 (2nd fret), 5 (4th fret) on the **G string** <mark>cleanly, one by one</mark>, and the groove lifts its head a little, like singing. **BPM 85** is the goal, but today start slow and first smooth the **connection** between groove and fill. If you rush into the fill, the beat drags, so pin each note down **beat by beat**.

Even on a **5-string**, the hand shape is the same. Keep the low **B** deadened with the side of the thumb and focus only on the groove and the pop fill. On a 5-string you could also do a <mark>heavier</mark> version rooted on the low B, but today get the feel in the same E position. First mark the spots the groove and fill pass through on the fretboard — today's whole measure comes from here.

```json
{
  "id": "m2.w8.d1.groove_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The **R** (E) on the 4th string and the octave **8** (E) on the 2nd string are the groove; the **b3·4·5** on the G string are the pop fill.

```json
{
  "id": "m2.w8.d1.groove_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand spots are the same as on a 4-string. Keep the low **B** deadened with the thumb.

## ② Visuals

Today you complete **one measure**! First warm the hand with the **octave + ghost groove**, then lay the <mark>b3-4-5 pop fill</mark> on top. Each example comes in **both a 4-string and a 5-string version**.

First, the **octave + ghost groove**. Thumb the **E** on the 4th string, fill the gap with a ghost, and pop the octave **E** on the 2nd string.

```json
{
  "id": "m2.w8.d1.octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** The thumb-ghost-pop rolling — the skeleton of the groove.

```json
{
  "id": "m2.w8.d1.octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and spots are the same as on a 4-string. Keep the low B deadened with the thumb.

Now lay the **pop fill** over the groove. The first half is the octave groove, the second half finishes <mark>like a song</mark> with the **b3-4-5** pop.

```json
{
  "id": "m2.w8.d1.groove_fill_4",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Front is the octave groove, back is the b3-4-5 pop fill. Today's finished single measure.

```json
{
  "id": "m2.w8.d1.groove_fill_5",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Shake the Week 7 pop arch lightly at **BPM 50** to wake the hand. Today you'll join <mark>groove and pop</mark> into one measure.

**10–20 min · Brain training**
Run the finished measure **very slowly** as below, carving into your hand the **connection** that crosses from groove to pop fill.

```json
{
  "id": "m2.w8.d1.combo_slow_4",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Very slowly. Check that the b3-4-5 fill lands in place after the octave groove.

```json
{
  "id": "m2.w8.d1.combo_slow_5",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Keep the low B covered with the side of the thumb.

**20–40 min · Real play**
Repeat the finished measure at **BPM 85**. If the fill <mark>smears</mark>, drop the tempo and revive groove and pop separately. Learn it on the 4-string, then confirm it on the 5-string too.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether <mark>the groove and fill join smoothly</mark>. Note the BPM that felt comfortable today.

**Done when:** you can smoothly play the finished single measure — an octave + ghost groove topped with a b3-4-5 pop fill — at BPM 85.

## ④ Tips / Common mistakes

Nudge the finished measure up to **BPM 90** and check that the groove and fill stay alive even as it speeds up.

```json
{
  "id": "m2.w8.d1.groove_fill_check_4",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 90, 4-string.** Check that the **octave groove and pop fill** stay clearly alive even as it speeds up a little.

```json
{
  "id": "m2.w8.d1.groove_fill_check_5",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Always keep the low B deadened with the thumb.

- **The fill drags.** If you rush crossing from groove to fill, it drags. Pin each note down **beat by beat**.
- **The octave is weak.** The 2nd-string octave pop tends to go faint. Snap it at **the same size** as the thumb.
- **The ghost rings.** If a pitch lingers in the gap-filling ghost, it gets messy. Make **only the click, with no pitch**.
- **Neglecting low B (5-string).** Absorbed in the groove, B rings easily. Always keep B covered with the side of the thumb.
</content>
