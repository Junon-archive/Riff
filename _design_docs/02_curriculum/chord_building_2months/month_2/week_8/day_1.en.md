---
title: "Challenge orientation — ii–V–I in several voicings"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — Stage prep: same progression, several choices

## ① Theory

Welcome to the last week! This week's backing is the heart of R&B/jazz — the **ii–V–I** (in C: **Dm7 → G7 → Cmaj7**), a four-bar loop. Over it you'll mix everything from two months into your own comping.

Today, lay out your **choice cards.** You can grab the same progression several ways:

- **Shell voicings** (Week 4) — just R·3·7, thin and clean. Root-string crossing (5·6·5).
- **9th tensions** (Week 6) — add shimmering color.
- **High register / top notes** (Weeks 5·7) — make it sing on the thin strings.

There's no single right answer. The core of this week is **choosing,** each time, "how do I grab this chord right now?" Today you learn the basic set — the ii–V–I as shells — and the choice to add a 9th to the I (Cmaj7). Don't feel pressured — there's nothing new to memorize this week. It's the week you pull out the tools stacked up in your hands over the past two months. Think of today as laying the whole toolbox open and glancing over "what have I got in here again?"

## ② Visuals

**Dm7 shell (ii, 5th-string root).** Green is the guide tones (b3·b7).

```json
{
  "id": "m2.w8.d1.dm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 shell (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 5, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 3, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**G7 shell (V, 6th-string root).**

```json
{
  "id": "m2.w8.d1.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Choice: play the I as a Cmaj7 shell, or as Cmaj9.** Add the 9th (yellow) for shimmer.

```json
{
  "id": "m2.w8.d1.cmaj9_choice",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I with 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — shell ii–V–I comp.** The skeleton of this week's backing. Roots cross 5·6·5, hand in one region.

```json
{
  "id": "m2.w8.d1.shell_ii_v_i",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Dm7 → G7 → Cmaj7 shells. This is the basic stage set. Stay aware of root-string crossing and the guide tones (green).

**Example 2 — add a 9th to the I (a choice).** Change the final Cmaj7 to Cmaj9 for shimmer. Same progression, different choice.

```json
{
  "id": "m2.w8.d1.ii_v_i_with9",
  "type": "tab",
  "meta": { "title": "ii-V-I with Cmaj9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Bar 3's I is now Cmaj9 (9th = yellow). Whether to go shell or 9-chord is your choice. Feel the color difference.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret the Dm7·G7·Cmaj7 shells, three strings clear, dropped strings dead. Then grab Cmaj9 (add 9) too.

**10–20 min · Brain training (today's target = seeing the choices)**
Grab each chord two ways — "shell? or 9-chord?" — mapping the root string, guide tones, and 9th position. Organize the 8-week toolkit into a mental map.

**20–40 min · Real comping (Examples 1 & 2 / 74–84 BPM)**
**Repeat Example 1's shell ii–V–I at BPM 78** several times → then **add a 9th to the I like Example 2.** Over an R&B backing track (if you have one), alternate the two versions and compare colors.

**40–50 min · Record & reflect (recommended)**
Record 15 seconds each of the two versions and compare. Check: do you hear the color difference between shell and 9-chord, and is the root-string crossing smooth?

**Done when:** you can comp the ii–V–I two ways — shell, and with a 9th on the I — and grasp the sense of "choosing how to grab a chord."

## ④ Tips / common mistakes

- **Hunting for the right answer.** This week is choice. Shell and 9-chord are both correct. Pick by moment and taste.
- **Dropped strings leaking.** Muting is life for shells and 9-chords. Only the used strings per chord.
- **Using just one tool.** Pull out everything from 8 weeks. Today shell + 9th, tomorrow rhythm.
- **Practicing without a backing.** Get a ii–V–I backing track for a real feel.
