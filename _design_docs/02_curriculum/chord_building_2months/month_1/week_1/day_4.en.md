---
title: "Completing m7 + integration — cycle four characters over one root"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — Two switches (3rd & 7th) command Maj·m·7·m7

## ① Theory

At last, the week's finish line. Today you're not learning something new — you're **combining** the two switches you already have. Just getting here means you've already crossed a whole mountain.

- **3rd string = the 3rd switch.** Fret 4 (3, bright) ↔ fret 3 (b3, dark).
- **4th string = the 7th switch.** Fret 5 (R) ↔ fret 3 (b7, tension).

Today's new chord, **m7,** is simply both switches **lowered.** That is, minor (b3) with a dominant b7 added. On G, 3rd string fret 3 (b3) + 4th string fret 3 (b7) = **Gm7** — dark but with its tension softly released, that sophisticated jazz/soul/city-pop color.

Draw the two switches as a table and you get exactly four cells:

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

- **Maj** = 3rd as-is · 7th as-is (3rd string 4, 4th string 5)
- **m** = 3rd lowered · 7th as-is (3rd string 3, 4th string 5)
- **7** = 3rd as-is · 7th lowered (3rd string 4, 4th string 3)
- **m7** = 3rd lowered · 7th lowered (3rd string 3, 4th string 3)

Isn't that something? Four chords are, in the end, just the **up/down combination of two fingers.** Not four shapes to memorize — just two switches. Today you cycle them freely over one root, cementing this week's conclusion into your hands: a chord isn't memorized, it's assembled.

## ② Visuals

**Gm7 (E-form)** with both switches down. The two greens are the **b3 (dark)** and the **b7 (released tension)** — the two notes that make m7 what it is.

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**Example 1 — character-tone tour.** Over one root, fret 3 (major 3rd) → b3 (minor 3rd) → b7 (minor 7th) in turn. Sort out by ear how the combination of these three notes makes the chord's name.

```json
{
  "id": "m1.w1.d4.character_tones_line",
  "type": "tab",
  "meta": {
    "title": "Character tones tour (3 / b3 / b7) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "Root → major 3rd → minor 3rd → minor 7th." The first two handle bright↔dark, the final b7 handles tension. Repeat 4×.

**Example 2 — Gm7 comp groove + integration cycle.** Root → b7 ghost → b3 puts the m7 color into a rhythm.

```json
{
  "id": "m1.w1.d4.gm7_comp",
  "type": "tab",
  "meta": {
    "title": "Gm7 comp groove — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 80,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, repeat 4×.** Once the root-b7-b3 groove is comfortable, expand to the **integration cycle:** in the same spot, change only the 3rd-string (3↔b3) and 4th-string (R↔b7) fingers to cycle **G → Gm → G7 → Gm7,** one bar each.

**Example 3 — full-chord comping.** Same rhythm as Example 2, but each hit (root, b7, b3) rings the whole Gm7 chord instead of a single note.

```json
{
  "id": "m1.w1.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (Gm7) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80.** Same groove as Example 2, now with the whole chord. Once the root-b7-b3 comp feels comfortable, move on to this.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play G → Gm → G7 → Gm7 in order, four beats each. Move only the 3rd- and 4th-string fingers up and down, never lifting the root (6th string, fret 3). Check all four chords ring cleanly on six strings.

**10–20 min · Brain training (today's target = the two switches)**
Distinguish all four chords with just two questions: "Is the 3rd down? Is the 7th down?" When someone says "Gm7!", grab the both-lowered spot with your eyes closed. Use **Example 1** to name the three character tones aloud.

**20–40 min · Real comping (Example 2 + integration cycle / 75–85 BPM)**
**Repeat Example 2's Gm7 groove at BPM 80 4×,** then expand into the **integration cycle** (G→Gm→G7→Gm7, one bar each). Then move just the root to the 5th string (C family) and cycle the same way. Today completes the feel that "four characters are the combination of two fingers."

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of one lap of the integration cycle. Check: does a stray string die when chords change, and are all four characters clearly distinct?

**Done when:** over one root, you can cycle G → Gm → G7 → Gm7 smoothly using only the 3rd- and 4th-string fingers. (Week 1 complete!)

## ④ Tips / common mistakes

- **Memorizing the four as "different shapes."** Do that and you'll collapse again at 8 or 16 chords. Always remember them as "the combination of two switches, the 3rd and the 7th."
- **Dropping the root while cycling.** The 6th-string root is your anchor. If it wobbles, everything wobbles. Keep it fretted through the whole cycle.
- **Hearing m7 as just "minor."** m7 is softer and more open than minor, because the b7 releases the tension a bit. Enjoy that "sophisticated relaxation."
- **Speed greed.** If the cycle mushes, drop to BPM 70. This week, the correct combination matters 100× more than speed.
