---
title: "Hammer-on — One Strike, Two Notes"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — Hammer-on, One Strike Two Notes

## ① Theory

It's **Week 6**! Until last week, slap was **rhythm**. This week you lay <mark>melody</mark> on top of it. It starts with the **hammer-on**. Play one note with the **thumb (slap)**, then strike **the next fret hard** with a left-hand finger — and a second note rings without striking again. Literally **one strike, two notes**.

Today's two notes are **open E** (4th string) and **G** (4th string, 3rd fret). E is the pentatonic **root (R)**, G is the **b3**. Slap **E** "dun" with the thumb, then immediately <mark>drive the **ring finger** down like a hammer</mark> onto the 3rd fret. The finger must press **right behind** the fret precisely, and **fast**, so the second note is clear. Press slowly and the sound smears <mark>mushy</mark>.

The knack is not **finger force** but the **decisiveness of the strike**. Lift the finger slightly, then drop it **aimed just behind the fret** with a tap. Start slowly at **BPM 75** and focus only on whether the second note **G** <mark>sounds as clear as</mark> the first note **E**. If it's quiet, be more decisive; if it smears, get closer to the fret. This one small left-hand move adds the **smoothness of legato** to the slap. What was a stiff strike now begins to become a **melody that connects note to note**.

On a **5-string**, the notes and the hand shape are the same as on a 4-string. Keep the low **B** deadened with the thumb, and carve just the **hammer-on** feel into your hand. Once **thumb + hammer, two notes** rings clearly today, tomorrow you'll learn its opposite, the **pull-off**. First mark the hand's home on the fretboard — **root E and the b3, G**; today's two notes all come from here.

```json
{
  "id": "m2.w6.d1.hammer_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4-string.** Below is **open E** (thumb), 3rd fret is **G** (hammer). Today's two notes come from these two spots.

```json
{
  "id": "m2.w6.d1.hammer_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low **B** deadened with the thumb.

## ② Visuals

Today you carve one **hammer-on** into your body. First warm the hand with a **thumb pulse**, then repeat <mark>thumb + hammer, two notes</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **thumb pulse**. Slap **open E** in even quarter notes to first set the **home (downbeat)** where the hammer-on will land.

```json
{
  "id": "m2.w6.d1.thumb_pulse_4",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** The four downbeats are the pillars the hammer-on will land on.

```json
{
  "id": "m2.w6.d1.thumb_pulse_5",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5-string.** The notes are the same as on a 4-string. Keep the low B deadened with the thumb.

Now lay a **hammer-on** on every downbeat. It's <mark>**thumb + hammer**</mark>. Slap **E** with the thumb, then immediately strike **G**, so one beat yields **two notes**.

```json
{
  "id": "m2.w6.d1.hammer_pairs_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** From the **E** slapped by the thumb, the left hand strikes **G** for two notes at once. The two notes must be even in size.

```json
{
  "id": "m2.w6.d1.hammer_pairs_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and spots are the same as on a 4-string. Keep the low B deadened with the thumb so it doesn't leak.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow last week's 16th thumb lightly at **BPM 60** to wake the hand. Today, ready the left hand in the <mark>hammer-on posture</mark> in advance.

**10–20 min · Brain training**
As below, **very slowly**, lay the hammer-on **G** onto the thumb-slapped **E**. **Measure 1 is thumb only, measure 2 is the hammer-on**.

```json
{
  "id": "m2.w6.d1.hammer_slow_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Measure 1 thumb pulse, measure 2 hammer-on. Check by ear that the second note **G** is clear.

```json
{
  "id": "m2.w6.d1.hammer_slow_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and spots are the same as on a 4-string. Keep the low B covered with the side of the thumb.

**20–40 min · Real play**
Repeat **thumb + hammer, two notes** at **BPM 75**. If the second note <mark>smears</mark>, drop the tempo and revive the decisiveness of the hammer first. Learn it on the 4-string, then confirm the same two notes on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the hammer-on note is as clear as the first note</mark>. Note today's stable BPM too.

**Done when:** you can slap open E with the thumb, add G with a hammer-on, and produce two notes from one strike clearly at BPM 75.

## ④ Tips / Common mistakes

Nudge today's hammer-on up to **BPM 85** and check that the second note stays alive even as it speeds up.

```json
{
  "id": "m2.w6.d1.hammer_check_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Check that the **hammer-on G** stays clearly alive even as it speeds up a little.

```json
{
  "id": "m2.w6.d1.hammer_check_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and spots are the same as on a 4-string. Always keep the low B deadened with the thumb.

- **The hammer is weak.** Lift the finger slightly, then drop it with a tap **aimed just behind the fret**. It's **speed**, not force.
- **The first note dies.** Fussing over the hammer, the thumb weakens easily. Slap **the thumb clearly too** to match the size of the two notes.
- **Too far from the fret.** Pressing far from the fret smears the sound. Aim **right behind the fret**.
- **Neglecting low B (5-string).** Absorbed in the hammer, B rings easily. Always keep B covered with the side of the thumb.
