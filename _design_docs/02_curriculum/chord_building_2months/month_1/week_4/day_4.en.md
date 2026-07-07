---
title: "ii–V–I as shells — closing out the month"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — Week 3's ii–V–I entirely as shells, and a month's reflection

## ① Theory

The month's last day. The **Dm7 → G7 → Cmaj7** ii–V–I from Week 3 — you now play it **entirely as shell voicings.** There's nothing new to learn today. It's the day the pieces you've stacked up all month click together into "ah, this all connected into one thing." Two things merge naturally:

- **Root-string crossing (5·6·5)** — Dm7 and Cmaj7 are 5th-string-root shells, G7 is a 6th-string-root shell.
- **Guide tones = the shell's color notes** — since a shell keeps only the 3rd and 7th to begin with, Week 3's guide-tone line is literally the shell's two notes. That line on the 3rd string moving 5→4→4 — remember it?

So the shell ii–V–I is the most pro-like comping there is: **three-finger chords that sing, connected with minimal movement.** Everything you learned this month (assembly over a root, the 3rd/7th switches, 5th/6th-string roots, voice leading, the diet) all lives in one progression.

**Month recap:** you now see chords not as shapes but as "assembly — stacking the 3rd and 7th over a root and switching with fingers." For any chord, just find the root string and the 3rd/7th. Next month you'll paint color on top of this with **tensions (the 9th) and top-note melody.**

## ② Visuals

The three ii–V–I shells. Only the root (blue) and guide tones (green 3rd & 7th) remain.

```json
{
  "id": "m1.w4.d4.dm7_shell",
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

```json
{
  "id": "m1.w4.d4.g7_shell",
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

```json
{
  "id": "m1.w4.d4.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — shell guide-tone line.** On the 3rd string, Dm7 b7(C) → G7 3(B) → Cmaj7 7(B). 5→4→4. The very same line from Week 3, alive in the shells.

```json
{
  "id": "m1.w4.d4.shell_guide_line",
  "type": "tab",
  "meta": { "title": "Shell guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68.** One of the shell's two color notes (the 3rd string) barely moves as it sings. Repeat 4×.

**Example 2 — shell ii–V–I comp.** Cycle the Dm7 (5th) → G7 (6th) → Cmaj7 (5th) shells with root + guide tones.

```json
{
  "id": "m1.w4.d4.shell_ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Three-finger chords connected with minimal movement. The month's crystallization — this is pro comping.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret the Dm7·G7·Cmaj7 shells and check only three strings ring and the dropped strings are dead.

**10–20 min · Brain training (today's target = shell guide tones)**
With **Example 1,** fret the 3rd string 5→4→4 and confirm where the 3rd and 7th are in each shell. Even as the root string shifts 5·6·5, the color notes stay nearly in place.

**20–40 min · Real comping (Example 2 / 74–84 BPM)**
Over a backing track, cycle **Example 2's shell ii–V–I at BPM 78** several times. Is your hand tied to one region (frets 3–6), and do only three strings ring thin and clean? Try D key too if you have room.

**40–50 min · Record & reflect + month recap (recommended)**
Record two laps of the shell ii–V–I. Check: do dropped strings stay silent / are changes fast and smooth / do the guide tones connect? Then ask yourself — "How did I see chords a month ago, and how do I see them now?"

**Done when:** you can cycle ii–V–I entirely as shells, crossing root strings with minimal movement. (Month 1 complete! 🎉)

## ④ Tips / common mistakes

- **Hand jumping in the shell ii–V–I.** Crossing 5th- and 6th-string shells ties you to frets 3–6. A big jump means you chose the wrong root string.
- **Slacking on dropped strings.** Moving among six shells (three each on 6th/5th roots), the mute easily loosens. Only three strings per chord.
- **"I've learned it all" complacency.** This month you learned the ingredients (chord assembly). Next month, tensions and top notes paint the color that turns it into real music.
- **Skipping the recap.** Ten minutes of looking back is fuel for next month's motivation. Feel how far you've come.
