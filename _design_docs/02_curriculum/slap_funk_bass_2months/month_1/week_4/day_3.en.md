---
title: "Rehearsal — A Full Run Without Stopping"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — Rehearsal, A Full Run Without Stopping

## ① Theory

Yesterday the **E→G two-measure groove** gave your groove the shape of a song. Today is the **rehearsal** where you <mark>repeat that song without stopping</mark>. It's the final tempering before tomorrow's recording — the goal isn't a new skill but an **unbroken flow**. More than a perfect performance, making one take that runs from start to finish without a stop is all of today.

The heart of a rehearsal is one thing: **don't stop even when you slip**. In practice, when we make a mistake we reflexively stop and replay that spot, but in a recording or on stage that stop collapses the whole piece. So today we change the rule — <mark>let the mistake pass</mark> and protect the flow. Miss one note but keep the beat, and listeners barely notice. **Keeping the beat comes before hitting the exact note.**

The method is a **loop that circles several times in a row**. See **E→G, two measures** as one block, and when it ends, come right back to measure 1's E without resting. **BPM 80** — this week's target tempo. Circle it 4 times, 8 times in a row, and while it circles just remember <mark>where it wobbles</mark>, then fix only that spot separately later. Don't fix during the rehearsal; think only of flowing to the end. This "don't-stop feel" is the real key that decides tomorrow's recording.

On **a 5-string**, the flow and the move are the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, run the same take on a heavier low string too. Complete **one non-stop take** today, and tomorrow you just press record.

## ② Visuals

Today you learn the **E→G move map** at a glance, then run the **full run-through** without stopping. Each example comes in **both a 4-string and a 5-string version**.

First, the **move map**. The lower two blues are the **E spot** (thumb root · pop octave), the upper two blues are the **G spot**. Carve into your eyes <mark>the path the hand travels three frets</mark>.

```json
{
  "id": "m1.w4.d3.move_map_4",
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
  "id": "m1.w4.d3.move_map_5",
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

Now the **full run-through**. At **BPM 80**, keep circling E→G two measures <mark>without stopping</mark>. Let mistakes pass.

```json
{
  "id": "m1.w4.d3.full_run_4",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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

▶ **BPM 80, 4-string.** Two measures as one block; when it ends, come back to measure 1's E without resting.

```json
{
  "id": "m1.w4.d3.full_run_5",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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

▶ **BPM 80, 5-string.** The flow and the move are the same as on a 4-string. Keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Run the E groove and the G groove each lightly at BPM 60 to wake the hand. Today the theme is <mark>joining the two without a break</mark>.

**10–20 min · Brain training**
Watching the move map, shuttle E↔G very slowly. Just remember <mark>where it wobbles</mark>.

**20–40 min · Real play**
Circle the full run-through at **BPM 80**, 4 times, 8 times in a row. Don't stop even if you slip; protect the flow. Learn it on the 4-string, then confirm the same flow on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds of a non-stop take and listen for <mark>whether the flow held from start to finish</mark>. Note down only the spots that wobbled.

**Done when:** you can circle the E→G two-measure groove several times in a row at BPM 80 without stopping.

## ④ Tips / Common mistakes

- **You stop when you slip.** Your hand freezes reflexively. Just today, drop the wrong note and move on to the next beat.
- **Gaps between loops.** You catch a breath at the end of two measures and lose the beat. Join the end and start with not one beat of gap.
- **Rushing at 80.** Your hand races ahead of the target tempo. If it wobbles, drop back to Day 2's 78 for a moment.
- **Neglecting low B (5-string).** The longer the repeats, the more B leaks. Always keep B covered with the thumb.
