---
title: "Final recording & self-analysis — the crystallization of two months"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — Leave your own comping on a recording

## ① Theory

The last day at last. Today you combine everything to **finish your own comp over the ii–V–I and record it,** then analyze it yourself.

Looking back over two months:
- **Month 1** — a chord isn't a memorized shape but an **assembly of the 3rd and 7th over a root.** 6th/5th-string roots, voice leading, shell voicings.
- **Month 2** — you moved the root up to the 4th string to open the **high register,** added color with the **9th,** and connected the **top note** into a melody.

Today's finished comp is the sum of all these tools — shimmering with 9ths (color), singing with the top note (melody), grooving with rhythm (life). Not a memorized answer, but **your sound, made by your own choices.**
You made it here — that's genuinely remarkable. The person whose hand froze just changing one chord two months ago now designs and records comping all their own. This curriculum ends today, but your music truly starts from here. Be sure to keep that recording you made today — play it back in six months and you'll realize just how far you've come.

## ② Visuals

**Dm9 (ii).** Today's opening chord. Yellow = 9th.

```json
{
  "id": "m2.w8.d4.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9 (I).** The progression's home. Land shimmering with the 9th.

```json
{
  "id": "m2.w8.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Example 1 — final comp (9ths + groove).** Shimmering with 9ths, grooving with rests and palm mute. This is the skeleton to record today.

```json
{
  "id": "m2.w8.d4.final_comp",
  "type": "tab",
  "meta": { "title": "Final comp (9ths + groove) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 5, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 80, repeat 4×.** Dm9 → G7 → Cmaj9 with 9ths (yellow) and groove (rests, P.M.). This is your finished comp — let's record it.

**Example 2 — top-note melody (the song for the take).** Up top, C-B-B sings. Add this line to your comp to complete it.

```json
{
  "id": "m2.w8.d4.final_top_line",
  "type": "tab",
  "meta": { "title": "Top-note melody for the take — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72.** 1st string 8 → 7 → 7. Lay this top-note melody over your comp and you have your finished piece — color (9th) + song (top) + groove (rhythm) all together.

## ③ Today's practice (50-minute routine — recording challenge)

**0–10 min · Warm-up + setup**
Spin Example 1's final comp a few times to warm up, and prep a recording app (a phone voice memo is fine). Set up an R&B ii–V–I backing track.

**10–20 min · Brain training (today's target = lock in your choices)**
Decide the version to record: which chord gets a 9th? Groove A or B? What's on top? Choose which of the 8-week tools you'll use.

**20–40 min · Real recording**
Over the backing, **record your whole finished comp** (Example 1 + Example 2's top note if you like). Not perfect in one go — keep your favorite of several takes.

**40–50 min · Self-analysis (deep checklist)**
Play it back and diagnose: (1) did chord-change timing stay steady over the groove (2) any dead strings / mute mistakes (3) did the top-note melody connect (4) did the 9th (tension) shimmer as intended (5) one thing you'd change next time?

**Done when:** you record your own comp mixing 9ths, top notes, and groove over the ii–V–I, and analyze it with the checklist. (Week 8 · **2-month curriculum complete!** 🎉🎸)

## ④ Tips / common mistakes + what's next

- **Perfectionism in one take.** Even pros keep multiple takes. Play it several times, keep the best.
- **Recording without analysis.** The recording is your teacher. Always listen back and pick one thing.
- **Skipping the recap.** How has your eye for chords changed from two months ago to now? Be sure to feel that growth.
- **On to next month.** You're now someone who "assembles" and "sings" chords. Next is applying this comping to real songs, or expanding into a new curriculum (funk rhythm, etc.). Congratulations — you've come a long way!
