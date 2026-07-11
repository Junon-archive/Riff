---
title: "Completing the ii-V-I walk — Gm7-C7-Fmaj7, the road home"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — Completing the ii-V-I walk, Gm7-C7-Fmaj7, the road home

## ① 이론/설명

At last, the final day of Week 5, the day you complete ii-V-I into one. The three pieces you prepared over the past three days — the three chords' tones (D1), the ii→V seam (D2), the V→I resolution (D3) — you now <mark>link into a single three-bar walk</mark>. **Gm7 → C7 → Fmaj7**, walking jazz's road home from start to finish.

The structure of the deliverable is simple. **One chord per bar** — beats 1, 2, and 3 walk that chord's tones, and beat 4 is the bridge to the next chord. Bar 1's Gm7 beat 4 is **Db**, aiming at C; bar 2's C7 beat 4 is **E**, aiming at F. And in bar 3 you <mark>arrive home at Fmaj7</mark> and rest easy. The two bridges thread three chords into one walk.

Walk it at BPM 85 in **swing quarter notes**. Beat 1 of every bar lands squarely on the root, and beat 4 crosses smoothly to the next chord. <mark>Beat 1 lands, beat 4 bridges</mark> — this principle you've drilled all month and a half now comes together over ii-V-I, the core progression of jazz. Start slow, and once it settles into your body, raise the speed bit by bit.

First, see the landmarks of the three-bar walk — the three roots (**G·C·F**) and the two bridges (**Db·E**) — on the fretboard.

```json
{
  "id": "m2.w5.d4.ii_v_i_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The three roots G (4th string, fret 3), C (3rd string, fret 3), F (4th string, fret 1), and the two bridges Db (3rd string, fret 4), E (3rd string, fret 7).

```json
{
  "id": "m2.w5.d4.ii_v_i_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also gauge lower roots on the low B.

## ② 시각 자료

At last, this week's deliverable, the three-bar **ii-V-I walk**. Link Gm7-C7-Fmaj7 with the **two bridges** and <mark>walk it in one go, as if heading home</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Gm7 (bar 1) → C7 (bar 2) → Fmaj7 (bar 3). Bar 1's beat-4 Db approaches C, bar 2's beat-4 E approaches F. At V→I you arrive home.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 85, 5-string.** Same notes and positions as the 4-string. You can also add a heavier low end on the low B.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's C7→Fmaj7 resolution once at BPM 72 to bring the feel of the two bridges (Db·E) back to your fingertips.

**10–20 min · Brain training**
With the prep below, press the three-bar walk as slow swing quarters at **BPM 65** and set the chord changes slowly. Check <mark>whether the two bridges lead naturally into the next bar's root</mark>.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** The three bars slowly. Set the two seams squarely: bar 1 beat-4 Db → bar 2 C, and bar 2 beat-4 E → bar 3 F.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **ii-V-I walk** above as a three-bar cycle at BPM 85. Watch <mark>whether the three chords connect seamlessly through the two bridges</mark>. Learn it on 4-string, then confirm the same flow on 5-string.

**40–50 min · Record / graduation**
At last, recording. At a comfortable tempo, record the three ii-V-I bars two or three times without stopping, and keep the best take as your first ii-V-I walk. Save both 4- and 5-string and Week 5 is complete.

**Done when:** you can walk and record the three-bar Gm7-C7-Fmaj7 ii-V-I walk, linked by the two approach notes (Db·E), in swing quarters on both 4- and 5-string, as if heading home. — Weekly deliverable: a recording of your first ii-V-I walking bass. (Week 5 complete!)

## ④ 팁 / 흔한 실수

- **Your hand tangles in bar 2's C7.** You dip briefly to the lower string with C7's 5th G (4th string, fret 3), then return to b7 Bb (3rd string, fret 1). Learn this hand shift at a slow tempo ahead of time and real play gets easier.
- **You rush the landing after a bridge.** Off the beat-4 bridge (Db·E), it's easy to get excited and pull the next beat 1 early. Both bridges are a single half-step, so don't hurry — land exactly on the beat.

Look at this week's stars, the two bridges Db and E, at a glance. These two approach notes are the key that threaded three chords into one.

```json
{
  "id": "m2.w5.d4.two_bridges_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4-string.** Bar 1's Gm7 bridge Db (3rd string, fret 4) and bar 2's C7 bridge E (3rd string, fret 7), the two approach notes.

```json
{
  "id": "m2.w5.d4.two_bridges_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

- **Give yourself big credit for Week 5.** You started with three chords' tones, linked them with approach notes, and now you've walked ii-V-I, the core progression of jazz, in swing quarters and even recorded it. That's a big step. From next week you'll walk this ii-V-I over more keys and longer progressions, expanding it into real jazz walking.
