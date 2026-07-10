---
title: "Slap Day 1 — The Thumb (boom!)"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — The Thumb Slap, boom!

## ① Theory

Today you open the door to slap. If slap ever sounded scary, remember just one sentence — **slap isn't your fingers, it's a drum kit.** The thumb strike, the **thumb (T)**, is the **kick drum**; the finger pluck, the pop, is the snare. Today you make only one of those two — **the kick, that <mark>thumb sound (boom!)</mark>**. Set flashy lines aside and focus on a single fat, even hit.

The heart of the thumb is not the hand but **the rotation of your forearm**. Twist your forearm slightly, like turning a doorknob, and the thumb naturally falls toward the string. What touches the string is not the tip but **<mark>the side of the thumb</mark>**. The best spot is the end of the neck, **near the last fret, a little off the bridge**. The string is firm there, so the "boom!" attack rings out well.

The most important feeling is **the bounce**. If you press the string and stop, the sound dies. Like bouncing off a trampoline, **<mark>the moment you strike you must rebound right away</mark>** so the string snaps against the fret and that signature metallic "boom" comes alive. Today's goal is just one thing — slap **open E (4th string)** so all **four hits ring with the same volume and same tone**.

At first you may get only a dull "thup," and that's normal. Once the angle and force settle into your hand, it turns into "boom!" within days. If you play **a 5-string**, there's a low B below, so just take care that the thumb doesn't brush B as it passes. The E·A·D·G positions are **exactly the same as on a 4-string**, so watch only your own instrument and follow along.

## ② Visuals

Today you barely use your left hand — you slap a single **open E** note. First check the **strike spot** your thumb aims for on the fretboard, then keep <mark>the same tone tight</mark> through quarters and eighths. Each example is laid out in **both a 4-string and a 5-string version**.

First, the **thumb strike map**. The blue dot is the root E (4th string) — snap this string near the bridge with the side of your thumb.

```json
{
  "id": "m1.w1.d1.thumb_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The blue dot is the root E (4th string). Snap this string near the bridge with the side of your thumb.

```json
{
  "id": "m1.w1.d1.thumb_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The E spot is the same as on a 4-string. Rest your thumb lightly over the low B so you don't catch it in passing.

**Example 1 — thumb quarters.** Slap open E once per beat. The **T** on the score means strike with the thumb.

```json
{
  "id": "m1.w1.d1.thumb_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** One thumb slap (T) per metronome beat. Check by ear that all four "boom"s are equal in size.

```json
{
  "id": "m1.w1.d1.thumb_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Rest your thumb over the low B so it stays silent.

**Example 2 — thumb eighths.** Split each beat in two, eight times. Even as it speeds up, only push to the point where <mark>the "boom" tone doesn't collapse</mark>.

```json
{
  "id": "m1.w1.d1.thumb_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** Twice per beat. Even faster, don't let the "boom" tone smear into a dull "thup."

```json
{
  "id": "m1.w1.d1.thumb_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same notes as the 4-string. Here too, rest your thumb on the low B to keep it quiet.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Drop the tension in your shoulder and arm, and just repeat **twisting the forearm like a doorknob**. For now, **a comfortable rotation** comes before sound.

**10–20 min · Brain training**
Slap open E very slowly. Focus only on <mark>whether the side of the thumb strikes and rebounds right away</mark> — that **bounce**.

**20–40 min · Real play**
Repeat Example 1 (quarters) at **BPM 60** → once the "boom" is even, move to Example 2 (eighths) at **BPM 65**. If the sound dulls into "thup," drop back to quarters.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **all four thumb hits are the same size and tone**. Note the BPM you reached today.

**Done when:** you can slap open E so that all four hits at 60–65 ring evenly with the same volume and the same "boom" tone.

## ④ Tips / Common mistakes

- **You press and stop the string.** If the thumb stays on the string, the sound dies. Rebound the instant you strike, like a trampoline.
- **Striking with the thumb tip.** Hit with the side, not the tip, for a wide, firm "boom." Lay the thumb down a little.
- **Too hard.** Muscling it only hurts your hand and worsens the tone. The strike angle, not the force, makes the sound.
- **Neglecting low B (5-string).** If you brush B while focused on the thumb, the low end rings out. Always pass with the thumb covering B.
