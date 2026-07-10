---
title: "Graduation Recording — My First Slap Groove"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — Graduation Recording, My First Slap Groove

## ① Theory

At last, the final day of Week 4 — **Month 1 graduation**! There's just one thing to do today — <mark>record as a finished piece</mark> the groove you've refined over the last three weeks. Think back to the first day three weeks ago. Even striking the string once with the thumb felt awkward, and today you're recording the **E→G octave groove**. This is exactly what **growth** looks like.

Recording isn't hard. One phone is enough. What matters isn't perfection but **leaving something behind**. With yesterday's <mark>don't-stop feel</mark> intact, turn on the metronome at **BPM 80** and circle two or three times. Miss a note but keep the flow alive, and that's a good recording. Rather than waiting for one perfect take, **record several times and pick the best one**.

Today's finished piece is the **E→G octave+ghost groove**. **Measure 1 is E** (thumb open 4th string · pop 2nd string, 2nd fret), **measure 2 is G** (thumb 4th string, 3rd fret · pop 2nd string, 5th fret), and the **ghost ("chick")** fills the gaps between. Slap-chick-pop-chick rolls in eighth notes — two measures that hold the whole of the last three weeks. First warm the hand with the quarter-note prep, connect the two measures smoothly at **BPM 80**, then press record.

On **a 5-string**, the notes and the move are the same as on a 4-string. Keep the low B deadened with the thumb, or once comfortable, record a heavier version rooted on the low B. Next month, using this groove as a springboard, you'll advance into **funk applications** (syncopation · legato · popping). Today's recording is that starting line — now, leave behind <mark>my first slap groove</mark>.

## ② Visuals

Today you record **this month's finished piece**. Trace the reach once with the **move map**, warm the hand with the quarter-note prep, then run and record the <mark>pinned groove</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **move map**. Below is the **E spot**, above is the **G spot**. Travel three frets between the two octave forms.

```json
{
  "id": "m1.w4.d4.move_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The E spot below, the G spot above. Slide three frets between the two octave forms.

```json
{
  "id": "m1.w4.d4.move_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The spots and the move are the same as on a 4-string. Keep the low B deadened with the thumb.

**Prep — slap-chick-pop-chick quarters.** Before recording, warm E and G one beat each, slowly.

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Measure 1 E, measure 2 G. Don't rush; re-set the move and the muting.

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** The notes and the move are the same as on a 4-string. Keep the low B deadened with the thumb.

**This month's finished piece — the octave+ghost groove (E→G).** Now in eighth notes. Repeat <mark>slap-chick-pop-chick</mark> one measure on E, one measure on G, and record it.

```json
{
  "id": "m1.w4.d4.octave_ghost_song_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80.** Measure 1 E, measure 2 G (thumb root 4th string, 3rd fret; pop octave 2nd string, 5th fret). Keep slap-chick-pop-chick. These two measures are today's recording target.

```json
{
  "id": "m1.w4.d4.octave_ghost_song_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** The notes and the move are the same as on a 4-string. You can record one more version with the heavier low B root.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow yesterday's full run-through lightly at BPM 60 to wake the hand. Today you'll <mark>capture that very flow in a recording</mark>.

**10–20 min · Brain training**
Check the E-to-G move and the muting with the prep example (quarters). Confirm <mark>whether the seam holds steady</mark>.

**20–40 min · Real play**
Repeat the pinned groove at **BPM 80**. When the two measures connect smoothly, you're ready to record. Learn it on the 4-string, then confirm the same flow on the 5-string.

**40–50 min · Record/graduate**
At last, the recording. At **BPM 80**, record two or three loops without stopping, and keep the best one as <mark>my first groove</mark>. Leave both a 4-string and a 5-string take, and Month 1 is complete.

**Done when:** you can record the octave+ghost slap groove (E→G) at BPM 80 on both a 4-string and a 5-string without stopping. — Monthly deliverable: a recording of my first octave slap groove. (Month 1 complete!)

## ④ Tips / Common mistakes

- **You tense up the moment you hit record.** Your hand stiffens in front of the mic. Forget you're recording and run it comfortably, like practice, several times.
- **You try to be perfect in one shot.** Don't cling to the first take. Record several takes and pick the best one.
- **The speed wobbles on the move.** It's easy to rush on E→G. Warm the seam again with the prep example, then record.
- **Neglecting low B (5-string).** Focusing on recording, B leaks easily. Always keep B covered with the thumb.
