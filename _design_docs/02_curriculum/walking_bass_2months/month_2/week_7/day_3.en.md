---
title: "Hammer-on ornament — pluck once, let two notes flow"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — Hammer-on ornament (two flowing notes)

## ① 이론/설명

Yesterday we split beat 4 into two eighths to bridge into the next chord. Today's ornament is the **hammer-on**. Pluck one note, then, without using your plucking hand again, **slam a higher fret down with a fretting finger** to sound the second note. While the ring of the first plucked note is still alive, the fretting hand takes over that vibration to produce the next note. That's why the second note sounds clearly without being plucked by the plucking hand. <mark>The two notes flow together smoothly, like a single breath.</mark>

Today we learn a hammer-on into the chord tone **third A**. Pluck **A♭** a half step below first, then hammer straight to **A** and land on the third. A half-step hammer is a short distance, easy on the hand, and it seeps in chromatically so the third sings more. In the schema we write `technique: "hammer_on"` on the first note. <mark>One pluck, two sounds.</mark>

Of course the skeleton comes first. **The quarter-note walk stays as is**, and you let two notes flow over it with a hammer. If the hammer is faint, the second note dies. <mark>Bring your fretting finger down right behind the fret, precisely and firmly.</mark>

First, look at today's hammer pair — **A♭** (fret 4) → **third A** (fret 5) — on the 4th string.

```json
{
  "id": "m2.w7.d3.hammer_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4-string.** After root **F** (fret 1), pluck **A♭** (fret 4) a half step below and hammer to the **third A** (fret 5). The two notes connect one fret apart on the same 4th string.

```json
{
  "id": "m2.w7.d3.hammer_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back the low end more with the low B string.

## ② 시각 자료

Now, today's finished piece — one bar of a **hammer-on walk**. On beat 2, pluck A♭ a half step below and hammer to the third A, and walk the rest in quarters. <mark>One pluck flows two notes, so the step turns gliding-smooth.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w7.d3.hammer_walk_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string, swing.** Beat 1 **F** (root) → front of beat 2 pluck **A♭** and **hammer** to **A** (third) → beat 3 **C** (fifth) → beat 4 **E♭** (♭7). The hammer is a fretting-hand "slam"; the plucking hand strikes once, on A♭.

```json
{
  "id": "m2.w7.d3.hammer_walk_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's eighth-note fill walk once at BPM 72 to bring back the feel of two eighth notes.

**10–20 min · Brain training**
Press the hammer-on walk with the prep example below at a slow swing **BPM 60**. <mark>Check by ear that the hammered A rings as clearly as the plucked A♭.</mark>

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The hammer-on walk, slowly. Pluck A♭, then hammer clearly to A so both notes stay alive.

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **hammer-on walk** above at BPM 80. <mark>Watch that the second note A sounds as big and clear as the plucked note.</mark> Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / feedback**
Record one bar of the hammer-on walk two or three times around without stopping. Listen back and check whether the two hammered notes flow smoothly and whether the quarter-note skeleton stays steady.

**Done when:** you can play the ornament of plucking A♭ and hammering to the third A on beat 2 of the F7 quarter-note walk — with both notes clear — on 4- and 5-string. — Today's result: two flowing notes.

## ④ 팁 / 흔한 실수

- **The hammered note dies out faintly.** A hammer is all about a precise fretting-finger strike. If you don't come down firmly right behind the fret, the second note fades. Stand your fingertip up and plant it "slam" close to the fret.
- **You pluck twice with your plucking hand.** The charm of the hammer-on is "one pluck, two notes." Plucking the second note too erases the smooth seam. Leave the second note to the fretting-hand hammer alone.

Keep today's hammer pair, the two half-step notes on the 4th string, in your eye. From A♭ to the third A, just one fret up, the two notes connect as if flowing.

```json
{
  "id": "m2.w7.d3.hammer_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4-string.** The hammer pair. Pluck **A♭** (fret 4) and hammer one fret up to the **third A** (fret 5).

```json
{
  "id": "m2.w7.d3.hammer_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back the low end more with the low B string.

- **Give yourself credit today.** Now you've got three ornaments in hand — ghost, eighth-note fill, and hammer-on. Tomorrow we gather all three into one bar and complete week 7 with an **ornamented walk**.
