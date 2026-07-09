---
title: "Discovering the 4th-string root — moving the root up to the high register"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — When the root goes up to the 4th string, where do R·3·5 go?

## ① Theory

Over the past month the root came **down** — from the 6th string (Week 1) to the 5th (Week 2). This week is the opposite. You move the root **<mark>up to the 4th string</mark>.** Now chords ring in the **<mark>high register</mark>,** on the thin strings (1·2·3·4), bright and shimmering.

Our example is **G major (D-shape)** with the root on the 4th string, 5th fret. Broken down by interval:

```json
{
  "id": "m2.w5.d1.g_major_dform",
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

- **R (root)** — 4th string, fret 5 (G). This week's new home.
- **5 (5th)** — 3rd string, fret 7 (D).
- **R (root)** — 2nd string, fret 8 (G). The octave root.
- **3 (3rd)** — 1st string, fret 7 (B). **<mark>The highest-ringing note = the top note</mark>** (green).

Here's the new idea — the **<mark>top note</mark>.** <mark>When several strings ring, the highest one (usually the 1st string) drives the chord's impression</mark>. In this D-shape **the 3rd (B) is the top note,** so the chord sounds bright precisely because of that top 3rd. And **<mark>you don't use the 6th & 5th strings</mark>** — a string lower than the root would spoil the high-register crispness, so kill them firmly. Up in the high register the same chord rings far more sparkling. The first time you sound a chord up here today, you might think "wait, my guitar could make a sound this clear?" You spent a month down low, so think of today as opening the opposite side of the world.

## ② Visuals

**G major (D-shape)** with the root on the 4th string. The 6th & 5th are ✕ (muted); the green is the **<mark>3rd (top note)</mark>** on the 1st string.

```json
{
  "id": "m2.w5.d1.g_major_dform",
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

**Example 1 — D-shape chord-tone line.** Fret the four notes R → 5 → R → 3 one at a time. Burn into your ear that the final 3rd (1st string, green) rings bright as the top note.

```json
{
  "id": "m2.w5.d1.g_dform_line",
  "type": "tab",
  "meta": { "title": "G D-shape tones (R·5·R·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** "Root (4th) → 5th (3rd) → root (2nd) → 3rd (1st, top)." Feel the sound brighten as you climb and the top 3rd sparkle. Repeat 4×.

**Example 2 — high-register G comp.** Strum only the four thin strings (4·3·2·1). Let the 1st-string top note (3rd) ring clearly, with the 6th & 5th dead.

```json
{
  "id": "m2.w5.d1.g_high_comp",
  "type": "tab",
  "meta": { "title": "G high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 80, repeat 4×.** Strum the high-register G triad thin. Check the top note (1st-string 3rd) sparkles like a melody. If the 6th & 5th leak, the sound turns muddy.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret G (D-shape) and ring the 4·3·2·1 strings one at a time. Top priority: **<mark>are the 6th & 5th firmly dead</mark>** and only the four used strings clean?

**10–20 min · Brain training (today's target = the top note)**
Fret **Example 1** naming R·5·3, and especially confirm **<mark>which note is the top note (the 3rd)</mark>** right now. You pass when you can find the 1st string fret 7 (top = 3rd) with eyes closed.

**20–40 min · Real comping (Example 2 / 76–86 BPM)**
**Repeat Example 2's high-register G comp at BPM 80 4×.** Once comfortable, slide the same shape to another root fret (e.g., A = fret 7). Lay it over a bright backing and <mark>enjoy the high-register crispness</mark>.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the high comp. Check: did the low strings (6th & 5th) leak, and <mark>does the top note (3rd) ring clearly</mark>?

**Done when:** you can ring G (D-shape) on only the four thin strings with the 6th & 5th muted, and name that the top note is the 3rd.

## ④ Tips / common mistakes

- **Low strings leaking.** The biggest enemy of the 4th-string-root chord. Tilt the root fingertip onto the 5th string and cover the 6th with another finger.
- **Letting the top note slip.** It's the star all month. Always be aware whether the topmost 1st-string note is currently R, 3, or 5.
- **D-shape stretch ache.** The shape spans the 4th–1st strings, so your hand aches at first. Don't force it — four clean strings is enough.
- **Hitting hard because it's thin.** Thin is correct. Its value shows over a band/backing. Don't scrape hard — play light.
