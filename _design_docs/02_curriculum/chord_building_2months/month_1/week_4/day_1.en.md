---
title: "What a shell voicing is — drop the 5th, keep only 3rd & 7th"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — Trim the fat off a chord — what's left?

## ① Theory

Until now you've fretted chords filling all six strings. Today, flip the idea: **what can you throw away from a chord?**

What decides a chord's color (bright, dark, tense) is the **3rd and 7th.** The root is the chord's name and pillar. So what about the **5th**? The 5th actually contributes almost nothing to the chord's character. In a band the bass covers the root and another instrument fills the 5th, so if the guitar also grabs the 5th, the sound just clutters.

That's why pros boldly drop the 5th (and the doubled root) and keep **only root·3rd·7th.** This 3-string chord is called a **shell voicing.** The benefits are clear:

- **Faster changes** — only three fingers move.
- **Cleaner sound** — no clash with other instruments in a band.
- **Clear identity** — with only the 3rd and 7th left, the chord's character rings distinctly.

Today, using last week's G7, we diet it from a **6-string full chord → a 3-string shell.** Throwing something away feels like a loss, right? Yet strangely, the more pro you are, the less you grab. Using only three fingers, your changes will actually get easier than before — let's feel "the less you hold, the more pro it sounds" with your own hands today.

## ② Visuals

First, the familiar **G7 full voicing (6 strings).** Green is the 3rd & 7th (the color-holders), blue is the root & 5th.

```json
{
  "id": "m1.w4.d1.g7_full",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — full voicing (6 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "role": "root" }
  ]}
}
```

Now the **G7 shell (3 strings)** with the 5th and doubled root dropped. What remains is exactly R·b7·3. The ✕ marks the dropped strings. The sound is thin, but the "G7-ness" is intact.

```json
{
  "id": "m1.w4.d1.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — shell voicing (R·b7·3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — shell-tones check line.** Fret the three kept notes R → b7 → 3 one at a time and confirm by ear. Even without the 5th, do you hear a "tense G7"?

```json
{
  "id": "m1.w4.d1.shell_tones_line",
  "type": "tab",
  "meta": { "title": "Shell tones (R·b7·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70.** "Root → minor 7th → 3rd → root." Confirm the full G7 character comes from just three notes. Repeat 4×.

**Example 2 — G7 shell comp.** Strum only the three strings (6·4·3) and kill the rest. Learn a thin, distinct comp.

```json
{
  "id": "m1.w4.d1.g7_shell_comp",
  "type": "tab",
  "meta": { "title": "G7 shell comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Only the three strings 6·4·3, cleanly. Mind the mute so the 5th, 2nd, and 1st don't leak. Once comfortable, comping gets far lighter and faster.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate G7 full and G7 shell. Going to the shell, check the 5th/2nd/1st strings are firmly dead and only the three strings (6·4·3) ring.

**10–20 min · Brain training (today's target = the identity of the kept notes)**
Fret **Example 1** naming "root · minor 7th · 3rd." You pass when you can point out, eyes closed, which is the 3rd and which the 7th in the shell. Also recall where the 5th used to be.

**20–40 min · Real comping (Example 2 / 74–84 BPM)**
**Repeat Example 2's G7 shell comp at BPM 78 4×.** Get used to the thin, three-string sound. If you have a blues backing track, lay it on and alternate with the full chord to feel the difference.

**40–50 min · Record & reflect (recommended)**
Record 15 seconds each of full vs shell and compare. Check: did the dropped strings leak in the shell, and does the "G7-ness" still come through?

**Done when:** you can grab G7 as a shell (R·b7·3) with only three strings ringing, and name the identity (3rd & 7th) of the kept notes.

## ④ Tips / common mistakes

- **Dropped strings leaking.** The shell's biggest enemy. Tilt the root fingertip onto the 5th string, and lightly cover the 2nd/1st with the finger fretting the 3rd.
- **Missing the 5th.** The chord doesn't collapse without it — it's cleaner in a band. Don't be afraid to drop it.
- **Memorizing the shell as a "small shape."** Remember it by its identity R·3·7 so you can adapt to Maj7/m7 by changing just the 3rd and 7th (tomorrow).
- **A wide strum.** The shell is only three strings. Strum narrow so the pick doesn't catch the 5th/2nd/1st.
