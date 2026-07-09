---
title: "Minimal top-note movement — turn C-Am-F-G into a song"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — Common tones stay, the top note steps one note at a time

## ① Theory

Today you thread a real progression — **C - Am - F - G** (one of pop's most common) — with voice leading. The goal is a top note that moves **smoothly, like steps.**

Choose the top-note melody like this: **G → A → A → G.** (1st string fret 3 → 5 → 5 → 3.) Up one note (a major 2nd), stay, back down. No big jumps.

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

The secret is **common tones.** Grab C and Am in these spots and the two lower notes (C·E) are **identical.** So C→Am moves only the 1st string, G→A — leave the rest planted. Am→F keeps the top A the same. Pros find this "least-movement path" to connect chords, and as a result the top note sings. Isn't it something? The chords change, your hand barely moves, and yet a melody flows up top. That's the true identity of the polished comping you always liked — not magic, just the result of keeping the common tones planted.

## ② Visuals

**C — top = 5 (G).** The two lower notes are C (R) · E (3). Green is the top note.

```json
{
  "id": "m2.w7.d2.c_top_g",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note G (5)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**Am — top = R (A).** The lower two notes C·E are **identical** to the C chord (common tones). Only the top moves G→A.

```json
{
  "id": "m2.w7.d2.am_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "Am triad — top note A (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Am" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "b3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — top-note melody (G-A-A-G).** Play just the four top notes of the progression on the 1st string. This is the tune that sings over the chords.

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 1st string 3 → 5 → 5 → 3. G-A-A-G. The chords change C-Am-F-G, but the top note moves just one note. That smoothness is voice leading. Repeat 4×.

**Example 2 — C-Am-F-G comp (holding the top).** Play each chord as a lower note + top note, so the top melody (G-A-A-G) carries through.

```json
{
  "id": "m2.w7.d2.camfg_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Cycle C-Am-F-G with the top G-A-A-G singing. Check the hand doesn't jump big and stays in one region (frets 3–6).

**Example 3 — full-chord comping.** The C - Am - F - G progression that Example 2 fretted as just a low note + top note now rings as the full triad. The top-note melody (G-A-A-G) still carries on top, unchanged.

```json
{
  "id": "m2.w7.d2.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78.** Same rhythm as Example 2, but now the full chord rings. The progression sounds much fuller.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play the four spots C-Am-F-G in order. Especially at C↔Am, confirm the two lower notes (C·E) stay planted and only the top moves G↔A.

**10–20 min · Brain training (today's target = connecting top notes)**
Play **Example 1's** top melody (G-A-A-G) on the 1st string eyes-closed. Also confirm whether the top is R, 3, or 5 in each chord.

**20–40 min · Real comping (Example 2 / 74–84 BPM)**
**Repeat Example 2's C-Am-F-G at BPM 78 4×.** Focus on the top note singing G-A-A-G. Once comfortable, lay it over a backing like a real song.

**40–50 min · Record & reflect (recommended)**
Record two laps of the progression. Check: did the top-note melody connect smoothly, and did the hand avoid big jumps at the changes?

**Done when:** you can cycle C-Am-F-G with the top note G-A-A-G singing, keeping common tones planted and moving minimally.

## ④ Tips / common mistakes

- **Re-grabbing common tones.** C→Am keeps the two lower notes. Don't lift them; move only the top.
- **A big jump on the top note.** Choose spots where the top moves by step (one note). Big jumps kill the melody.
- **The top note buried.** Hit the topmost note a touch harder; the lower notes support.
- **Changing the progression in blocks.** Ask, for each chord, "where do I put this chord's top?"
