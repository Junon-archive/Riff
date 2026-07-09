---
title: "Dominant 7 — add the b7 and you get a 'wants-to-resolve' tension"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — One b7 puts a push-and-pull into the chord

## ① Theory

Through yesterday, the 3rd split bright (major) from dark (minor). Today we handle a new axis, the **7th** — specifically the **b7 (minor 7th).** Add one b7 to a major chord and you get a **dominant 7 (e.g., G7).** The name sounds grand, but the job is the same as yesterday: just laying one note on.

The essence of a dominant 7 is, in a word, **tension.** Unlike a major chord that sits there comfortably, once the b7 comes in there's a pull — "I want to go somewhere, I want to resolve fast." That wriggling blues-guitar feel, the stickiness of funk, the thrill of jazz — it all comes from this one b7. Isn't that wild? One note plants a "want to go" into the chord.

On the fretboard, lower yesterday's G major **4th string, fret 5 (R=G)** to **fret 3 (b7=F)** and you have G7 — leaving the 3rd (3rd string, fret 4, B) alone, moving only the 4th string two frets down. Now this week's picture snaps into focus — **3rd string = the 3rd (bright/dark) switch, 4th string = the 7th (tension) switch.** Just two strings, two switches. Tomorrow you'll combine them to make four chords at will. Today, just lock in this one 4th-string switch.

```json
{
  "id": "m1.w1.d3.g7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G7 — 6th-string root (E-form dominant)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

## ② Visuals

**G7 (E-form)** — only the 4th string dropped from fret 5 to 3. The green is the freshly added **b7 (F)**, the source of the tension.

```json
{
  "id": "m1.w1.d3.g7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G7 — 6th-string root (E-form dominant)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**Example 1 — the add-the-b7 line.** Fret the chord's skeleton (R·3·5), then add the **b7 (F)** at the end. Listen for the moment the b7 turns the sound from "finished" into "unfinished — curious what's next."

```json
{
  "id": "m1.w1.d3.add_b7_line",
  "type": "tab",
  "meta": {
    "title": "Add the b7 — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72.** Stable through "root-3rd-5th," then catch the slight "tilt" at the final **b7 (F).** Repeat 4×.

**Example 2 — Major → 7 switch comp.** Bar 1 G, bar 2 G7. On each marked note **strum the whole chord,** but the only thing that moves is **one finger on the 4th string (fret 5 → 3).** That one fret turns stability into tension.

```json
{
  "id": "m1.w1.d3.maj_dom7_comp",
  "type": "tab",
  "meta": {
    "title": "G to G7 switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 78,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78, repeat 4×.** Bar 1 stable G → bar 2 itchy G7. Only the 4th-string finger drops from fret 5 to 3. Enjoy that "want to go somewhere fast" feeling on G7.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate G ↔ G7 every four beats. Move only the 4th-string finger between fret 5 and 3, keeping the 3rd (3rd string, fret 4) fixed. Check that both chords ring cleanly on all six strings.

**10–20 min · Brain training (today's target = b7)**
Fret **Example 1** and name R·3·5·b7 aloud, then isolate just the **b7 (F)** at the 4th string, fret 3, over and over. You pass once you can land the b7 with eyes closed. This is your "tension switch" for the week.

**20–40 min · Real comping (Example 2 / 75–85 BPM)**
**Repeat Example 2 at BPM 78 4×** — bar 1 G, bar 2 G7. Once comfortable, move just the root to the 5th string (e.g., C ↔ C7) and apply the same switch. If you have a blues backing track, lay it on top. The goal is to feel the b7's push-and-pull in your hands.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of G ↔ G7. Check: does the **b7 ring clearly** (not dead) on G7, and does the switch stay clean?

**Done when:** you can switch G ↔ G7 using only fret 5↔3 on the 4th string, and fret the b7 with your eyes closed.

## ④ Tips / common mistakes

- **Confusing b7 and R.** On the 4th string, fret 5 is R (G), fret 3 is b7 (F). If you mix them up, remember "need tension → drop it (5→3)."
- **Lowering the 3rd too.** Today, only the 4th string. Leave the 3rd string (the 3rd) alone so it stays a "major-family 7." Lower the 3rd as well and that's the m7 you'll learn tomorrow.
- **Mistaking tension for a "wrong sound."** G7's "unfinished" feeling isn't a bug, it's a feature — that lack of resolution is what pulls you to the next chord.
- **Flat, no palm mute.** Honor Example 2's ghost hit to keep the groove alive.
