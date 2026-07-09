---
title: "Major → minor — lower the 3rd a half step and the expression flips"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — Bright into sad, with one finger

## ① Theory

Here's why we're doing this today — nail one chord properly and dozens of minor chords come free. Yesterday you fixed the **3rd (B)** in G major into your eye, right? Today you touch only that 3rd. <mark>One finger, one fret</mark>. The rule is a single line:

> **<mark>Lower the 3rd a half step</mark> (3 → b3) and Major becomes minor.**

On the fretboard, drop the **4th fret (B, the 3rd) on the 3rd string** one fret down to the **3rd fret (B♭, b3).** One finger, one fret, and the chord's expression flips <mark>from bright to sad</mark>. R and 5 — you don't touch them at all.

At first it might feel almost anticlimactic — "wait, that's really it?" — and **<mark>that emptiness is normal</mark>.** Good principles are simple like that. Bright vs. sad is always decided by one note, the 3rd; today you just feel that once, in your hands.

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
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
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Why it matters: from now on, for any chord you meet, just ask "where's the 3rd, and is it major or minor?" and you instantly know whether it's a bright or dark chord. Instead of memorizing 60 shapes, you track **<mark>one spot: the 3rd</mark>.** Am, Cm, Fm — you'll make them yourself, thinking "ah, just drop the 3rd a half step."

## ② Visuals

First, **G minor (E-form)** — yesterday's G major with only the 3rd lowered a half step. See the 3rd string move from fret 4 to fret 3. The green is that **b3 (B♭)**, <mark>today's star</mark>.

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
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
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**Example 1 — the 3 → b3 compare line.** On the same 3rd string, play fret 4 (major 3rd, B) next to fret 3 (minor 3rd, B♭) and catch the emotional difference that half step makes.

```json
{
  "id": "m1.w1.d2.third_compare_line",
  "type": "tab",
  "meta": {
    "title": "3 vs b3 compare — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70.** "Root → major third → minor third → root." Feel the expression darken the instant the 3rd drops to b3. Repeat 4×.

**Example 2 — Major ↔ minor switch comp.** Same rhythm, bar 1 is G, bar 2 is Gm. On each marked note **strum the whole chord,** but notice that the only thing that actually moves is **one finger on the 3rd string (fret 4 ↔ 3).**

```json
{
  "id": "m1.w1.d2.maj_min_comp",
  "type": "tab",
  "meta": {
    "title": "G to Gm switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75, repeat 4×.** Bar 1 is bright G, bar 2 is dark Gm. The rhythm is identical; only the 3rd-string finger drops one fret. Let your hand remember that one fret changes the whole mood.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate G ↔ Gm every four beats. Move only the 3rd-string finger between fret 4 and 3, keeping the other fingers planted as much as possible. <mark>Don't let the switch stutter</mark>.

**10–20 min · Brain training (today's target = b3)**
Fret **Example 1** while saying "third / flat third" aloud. You pass once you can alternate fret 4 and fret 3 on the 3rd string accurately with your eyes closed. This one fret is your <mark>"minor switch"</mark> for the whole week.

**20–40 min · Real comping (Example 2 / 70–80 BPM)**
No backing track needed. **Repeat Example 2 at BPM 75 4×** — bar 1 G, bar 2 Gm. Once comfortable, move just the root to the 5th string (e.g., C ↔ Cm) and apply the same switch. The key is to switch by thinking "<mark>I lowered the 3rd</mark>," not by re-grabbing a shape.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of G ↔ Gm. Check: <mark>does another string die during the switch</mark>, and does the b3 ring clearly? If it mushes, stand the 3rd-string fingertip up more.

**Done when:** you can switch G ↔ Gm smoothly using only fret 4↔3 on the 3rd string, and fret the b3 with your eyes closed.

## ④ Tips / common mistakes

- **Re-grabbing the whole hand.** Trying to reshape the entire hand for minor is slow. Only one 3rd-string finger, one fret. Leave the rest planted.
- **The b3 won't ring.** If the 3rd string's fret 3 dies, a neighboring finger is leaning on it. Stand your fingertip up so only the 3rd string sounds.
- **Memorizing "the sad chord shape."** Don't memorize Gm as a shape. Remember it as "G with the 3rd lowered a half step," so it works identically at A, C, D — anywhere.
- **Touching the 5th too.** The 5th (D) doesn't move today. If a finger drifts to the 5th, the chord wobbles.
