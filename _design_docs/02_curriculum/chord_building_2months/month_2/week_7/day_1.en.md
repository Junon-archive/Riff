---
title: "What voice leading is — I choose the top note"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — Same chord, which top note do you lay on?

## ① Theory

In Week 5 you saw that even one chord has several positions depending on what you put on top (the topmost note). This week's core is **<mark>choosing that deliberately</mark>** — because **<mark>lining up the top notes makes a melody</mark>.**

Amateurs just change chords in "blocks," wherever the hand goes. Pros first decide <mark>"how should the highest note sing across this progression?"</mark> and then pick the voicings that produce those top notes. Then chord comping becomes a "song" with a melody.

Today is a warm-up. Grab the same **G chord** in two positions by changing only the top note (R or 3), and get the feel that the top note is melody material. Today you only shuttle between two positions — no need to strain to compose a melody yet. Burn in just one sentence — <mark>"the top note becomes the melody"</mark> — and from tomorrow a real song starts singing over your comping.

## ② Visuals

**G — top note = R (G).** Green is the top note.

```json
{
  "id": "m2.w7.d1.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**G — top note = 3 (B).** <mark>The same G, but now the top is the 3rd</mark>.

```json
{
  "id": "m2.w7.d1.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — a short melody from top notes.** On the 1st string, pick G's three notes (R·3·5) to make a little tune: G → B → D → B. A preview of the feel that **the top note sings,** not the chord.

```json
{
  "id": "m2.w7.d1.top_melody_intro",
  "type": "tab",
  "meta": { "title": "Top-note mini melody — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 1st string 3 → 7 → 10 → 7. These four notes are a short melody made from G's R·3·5. Hear that a top note can become a song. Repeat 4×.

**Example 2 — same G, changing only the top note.** Bar 1 top = R, bar 2 top = 3. Compare how the topmost sound differs while the chord stays G.

```json
{
  "id": "m2.w7.d1.same_chord_top_comp",
  "type": "tab",
  "meta": { "title": "Same G, different top — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** Both are G, but the top note moves from R (1:3) to 3 (1:7). Feel with your hand that "even the same chord starts a melody once you choose the top." Repeat 4×.

**Example 3 — full-chord comping.** The same G (top R → 3) that Example 2 fretted as just a low note + top note now rings as the full triad. The top note still sings on top, unchanged.

```json
{
  "id": "m2.w7.d1.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (same G, different top) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** Same rhythm as Example 2, but now the full chord rings. Feel the chord fill out.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Grab G's two positions (top = R, top = 3), only the 1·2·3 strings clean. <mark>Adjust to the hand travel between the two spots</mark>.

**10–20 min · Brain training (today's target = choosing the top note)**
In each position, name aloud **<mark>what the topmost note is</mark>.** On "top = 3!", grab the fret-7 spot instantly. Confirm with **Example 1** that top notes make a melody.

**20–40 min · Real comping (Example 2 / 72–82 BPM)**
**Repeat Example 2 at BPM 76 4×.** Compare color by changing the top R↔3 on the same G. Once comfortable, add top = 5 (1:10) and <mark>travel the three spots to make a top-note melody</mark>.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of changing top notes. Check: <mark>is the top note clear</mark>, and is the position travel smooth?

**Done when:** you can grab the same G in several top-note positions (R·3·(5)) and make a short melody by choosing the top note.

## ④ Tips / common mistakes

- **Leaving the top note to chance.** Pros "choose" the top. Decide first what note should sit on top.
- **The top note won't ring.** If the topmost 1st-string note dies, you can't hear the melody. Stand the fingertip up.
- **A big jump between positions.** Today is concept. From tomorrow you connect with minimal movement.
- **Watching only the top, neglecting the chord.** The two lower notes make the chord; the top is the melody above it.
