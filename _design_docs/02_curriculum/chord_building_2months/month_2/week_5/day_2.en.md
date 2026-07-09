---
title: "High-register major/minor — the top note splits bright from dark"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Change character with one top note (1st string)

## ① Theory

Yesterday you saw that in the D-shape **the 3rd is the top note (1st string).** Today you touch only that top note. The rule is the same as month 1 — **<mark>lower the 3rd a half step for minor</mark>.** But this time that 3rd is the **highest note,** so <mark>changing the chord flips the topmost sound directly</mark>.

- **<mark>G major</mark>** — the top note is the 3rd (B) on the 1st string, fret 7.
- **<mark>G minor</mark>** — the top note is the b3 (B♭) on the 1st string, fret 6.

```json
{
  "id": "m2.w5.d2.g_major_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d2.gm_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

So moving one 1st-string finger between **frets 7 ↔ 6** switches bright↔dark. <mark>Up high, this change is especially vivid</mark> — whether the top note is a bright 3rd or a dark b3 *is* the chord's expression. R·5 stay put; only the single topmost note moves. With one finger you turn a song's expression bright or dark. That 3rd switch you learned last month now sings up top, so it reads far more dramatically. It's not hard — you're only moving one fret. Just take one thing away today: <mark>"want it bright, play the 3rd; want it dark, play the b3."</mark>

## ② Visuals

**G major (D-shape)** — <mark>top note is the 3rd (B, green)</mark>.

```json
{
  "id": "m2.w5.d2.g_major_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**G minor (D-shape)** — <mark>only the top note lowered a half step to b3 (B♭, green)</mark>. 1st string 7 → 6.

```json
{
  "id": "m2.w5.d2.gm_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — top-note 3 → b3 switch line.** On the 1st string, fret 7 (3, B) next to fret 6 (b3, B♭). Hear the topmost sound flip from bright to sad.

```json
{
  "id": "m2.w5.d2.top_switch_line",
  "type": "tab",
  "meta": { "title": "Top note 3 to b3 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 6, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** "Root → 3rd (bright) → b3 (dark) → 3rd." Feel one top note flip the chord's expression. Repeat 4×.

**Example 2 — major ↔ minor high-register comp.** Bar 1 G, bar 2 Gm. Strum the four thin strings, but only **one 1st-string finger (7↔6)** moves.

```json
{
  "id": "m2.w5.d2.maj_min_high_comp",
  "type": "tab",
  "meta": { "title": "G to Gm high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] }
    ]}
  ]}
}
```

▶ **BPM 80, repeat 4×.** Bar 1 bright G, bar 2 dark Gm. Only the 1st-string top note, 7↔6. Enjoy the change in the topmost sound.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate G ↔ Gm every four beats. <mark>Only the 1st string 7↔6; the other three strings fixed</mark>. Keep the 6th & 5th muted.

**10–20 min · Brain training (today's target = top note 3↔b3)**
With **Example 1,** alternate the 1st string frets 7 and 6, saying "third / flat third." <mark>You pass when you can flip the top note bright (7) and dark (6) with eyes closed</mark>.

**20–40 min · Real comping (Example 2 / 76–86 BPM)**
**Repeat Example 2 at BPM 80 4×** (G↔Gm). Once comfortable, move the root to another fret (e.g., A = 7) and apply the same top-note switch. <mark>Feel that the top note drives the chord's impression</mark>.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of G↔Gm. Check: <mark>does the top note (1st string) change clearly</mark>, and do the low strings stay silent?

**Done when:** you can switch high-register G ↔ Gm using only the 1st string 7↔6, and you understand the top note decides the character.

## ④ Tips / common mistakes

- **Changing the whole hand.** For minor, only one 1st-string finger moves a half step. Leave the rest planted.
- **The top note won't ring.** If the topmost 1st-string note dies, you can't hear the chord's expression. Stand the fingertip up so the 1st string is clean.
- **Looking for the 3rd on inner strings.** In this shape the 3rd is on the 1st string (the top). Watch the top, not the inner strings.
- **Slacking on the low strings.** The 4th-string root always means muting the 6th & 5th.
