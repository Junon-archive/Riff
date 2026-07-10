---
title: "Moving the Root — From E to G, a Groove That Becomes a Song"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — Moving the Root, From E to G

## ① Theory

Yesterday you refined **one measure of the E groove** down to an even tone. Today you make that stable groove <mark>move like a song</mark>. There's one way — you **move the root**. Add an **E→G** move to a groove that stayed in one spot, and the repetition suddenly becomes a "progression."

In a slap groove, **moving the root** means sliding the whole hand shape as one block. For **E** you thumbed the open 4th string and popped the octave at the 2nd string, 2nd fret. Going to **G**, that same shape rises so the **thumb is at the 4th string, 3rd fret** and the **pop is at the 2nd string, 5th fret**. The interval relationship (**root-octave**) is identical; <mark>only the position slides three frets</mark>. So there's no new shape to memorize — you just move the familiar octave form as it is.

Today's groove is **two measures**. **Measure 1 is E**, **measure 2 is G** — the same slap-chick-pop-chick rolls one measure in each spot. The key is the **timing of the move**. The moment the last "chick" of measure 1 ends, the left hand must already have slid **to the G spot** so the first thumb of measure 2 isn't late. At **BPM 78**, focus on whether the groove <mark>doesn't break</mark> at the moment of the move. Once you have room, hit measure 2's G a touch harder for **dynamics** — it gives the song a rise and fall.

On **a 5-string**, the notes and the move are the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, try the G measure on a heavier low string. Once these **two measures** connect today, your groove finally takes the shape of a song.

## ② Visuals

Today you check the new **G hand shape** and connect the **E→G two-measure groove**. Each example comes in **both a 4-string and a 5-string version**.

First, the **G hand shape**. It's the E octave form <mark>moved as it is</mark> — the lower blue is the **thumb root G** (4th string, 3rd fret), the upper blue is the **pop octave G** (2nd string, 5th fret). The "chick" still comes from the 3rd string.

```json
{
  "id": "m1.w4.d2.octave_shape_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Thumb root G (4th string, 3rd fret), pop octave G (2nd string, 5th fret). It's the E form moved three frets up.

```json
{
  "id": "m1.w4.d2.octave_shape_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb.

Now connect the **E→G two-measure groove**. At **BPM 78**, check whether <mark>the seam from measure 1 into measure 2</mark> is smooth.

```json
{
  "id": "m1.w4.d2.root_move_groove_4",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
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

▶ **BPM 78, 4-string.** Measure 1 E, measure 2 G. At the end of measure 1, slide the left hand to the G spot in advance.

```json
{
  "id": "m1.w4.d2.root_move_groove_5",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
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

▶ **BPM 78, 5-string.** The notes and the move are the same as on a 4-string. Keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Run yesterday's E groove lightly at BPM 60 to wake the hand. Today, drill into your hand the <mark>readiness to slide to G</mark> after it.

**10–20 min · Brain training**
Without pitch, shuttle between the E spot and the G spot very slowly and check <mark>whether the hand shape moves over intact</mark>.

**20–40 min · Real play**
Repeat the E→G two-measure groove at **BPM 78**. If you're late on the move, drop the speed and fix the seam first. Learn it on the 4-string, then confirm the same move on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the groove doesn't break as you cross from E into G</mark>. Note the BPM you reached today.

**Done when:** you can smoothly repeat the E→G two-measure octave groove at BPM 78 without the move breaking.

## ④ Tips / Common mistakes

- **Late on the move.** Your left hand moved too slowly. Shift it to G in advance on the last "chick" of measure 1.
- **The G pop misses.** Your index isn't used to the new spot (2nd string, 5th fret) yet. Repeat just the G hand shape on its own.
- **E and G differ in size.** Focusing on the move, the G goes weak. Match the strength of the two measures.
- **Neglecting low B (5-string).** When the hand moves up, B opens easily. Always keep B covered with the thumb.
