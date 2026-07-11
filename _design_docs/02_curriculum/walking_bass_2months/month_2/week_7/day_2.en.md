---
title: "Eighth-note fill — two notes on a weak beat that bridge to the next chord"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — Eighth-note fill (two notes on a weak beat)

## ① 이론/설명

Yesterday we slipped one ghost note between the quarters. Today we grow that in-between step into an **eighth-note fill**. A fill is **one quarter on a weak beat split into two eighths** — a small seam that connects to the next target note. When one quarter splits into two eighths, the notes pack tighter for just that short stretch, giving a lift as if the rhythm rolls forward for a moment. That contrast between the tight spot and the straight quarters gives the step its expression. <mark>One step divides into two, easing you smoothly into the next chord.</mark>

The most natural place is **beat 4**. On the last beat of the bar, split one quarter into two eighths that **climb chromatically** toward the next bar's root. Today's example rises from ♭7 E♭ to E a half step above and lands on the next bar's root F. The two eighths, like stairs, **announce the next note**. <mark>A fill is a signal that "the next one is coming."</mark>

Of course the order is unchanged. **The quarter-note skeleton comes first**, the fill only on the last beat. Too many fills make the step chatty. The more sparingly you use fills, the clearer and more refreshing those two steps land when one finally comes. <mark>One fill per bar is plenty.</mark>

First, look at the path today's fill climbs — ♭7 E♭ → E → octave F — on the **2nd string**.

```json
{
  "id": "m2.w7.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** ♭7 **Eb** (2nd string, fret 1) → **E** (2nd string, fret 2) → octave **F** (2nd string, fret 3): the two eighths on beat 4 climb a half step at a time to reach the next F.

```json
{
  "id": "m2.w7.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can gauge a lower F with the low B string.

## ② 시각 자료

Now, today's finished piece — one bar of an **eighth-note fill walk**. Walk F7 in quarters, then split the last beat 4 into two eighths that lead to the next root. <mark>The two steps on beat 4 build a bridge into the next bar.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w7.d2.fill_walk_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string, swing.** Beat 1 **F** (root) → beat 2 **A** (third) → beat 3 **C** (fifth) → beat 4 the two eighths **Eb** (♭7) + **E** (half step). The last two steps lay a staircase to the next bar's F.

```json
{
  "id": "m2.w7.d2.fill_walk_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's ghost walk once at BPM 72 to bring back the feel of the quarter-note skeleton.

**10–20 min · Brain training**
Press the eighth-note fill walk with the prep example below at a slow swing **BPM 60**. <mark>Check by ear that the two eighths on beat 4 rise clearly a half step at a time.</mark>

```json
{
  "id": "m2.w7.d2.fill_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The eighth-note fill walk, slowly. Walk quarters through beat 3, and split into two eighths only on beat 4.

```json
{
  "id": "m2.w7.d2.fill_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **eighth-note fill walk** above at BPM 80. <mark>Watch that beats 1–3 stay steady quarters and only beat 4 divides into two steps.</mark> Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / feedback**
Record one bar of the eighth-note fill walk two or three times around without stopping. Listen back and check whether the fill flows naturally into the next bar and whether the quarter-note skeleton stays steady.

**Done when:** you can split beat 4 of the F7 quarter-note walk into two eighths that climb a half step at a time to the next root, on both 4- and 5-string. — Today's result: an eighth-note fill.

## ④ 팁 / 흔한 실수

- **You put the fill on any old beat.** A fill is a bridge into what comes next, so beat 4 is the most natural place for it. Put it on beats 1–2 and the step looks hasty. At first, build the habit of keeping it only on beat 4.
- **The two eighths cram together.** In swing, the first eighth is a bit longer and the second a bit shorter. Gluing them to equal length makes it stiff. Lean lightly on the first note, then move on to the second.

Keep today's fill, the two steps climbing a half step at a time on beat 4, in your eye. From E♭ to octave F, one short staircase calls in the next bar.

```json
{
  "id": "m2.w7.d2.fill_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** The two-eighth fill on beat 4. ♭7 **Eb** (fret 1) → **E** (fret 2) climbs to call in octave **F** (fret 3).

```json
{
  "id": "m2.w7.d2.fill_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back the low end more with the low B string.

- **Give yourself credit today.** After the ghost, you can now build a bridge into the next chord with two eighth notes. Tomorrow we'll flow these two notes smoothly with a **hammer-on**.
