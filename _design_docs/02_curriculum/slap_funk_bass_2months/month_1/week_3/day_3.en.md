---
title: "Two-Hand Muting — A Noise-Free Ghost"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — Two-Hand Muting, A Noise-Free Ghost

## ① Theory

Yesterday you joined **slap-chick-pop** into one. Today you polish that flow <mark>clean</mark>. The goal is **two-hand muting** — **silence the strings you don't play, and make the ghost ("chick") accurate**. Most of the time slap sounds messy, the cause isn't wrong notes but **noise leaking from strings that shouldn't ring**.

Muting is done by **both hands together**. The **left hand**, when making the ghost, drapes widely over several strings and deadens them, <mark>covering even the strings you aren't playing</mark>. The **right hand** rests the side of the thumb or the palm against the low strings, holding them down so that even as you pop, the lower strings don't ring along. When both hands **turn off the unwanted sounds in advance**, all that's left is the intended boom, chick, and snap.

Today you add one more ghost at the back of yesterday's flow to complete **slap-chick-pop-chick**. It's a full eighth-note flow with both empty slots filled by "chick." But today's key isn't speed — it's <mark>cleanliness</mark>. Check the muting in quarters at **BPM 60**, then string it in eighths at **BPM 70**. Check the muting with your **ears, not your eyes** — stop your hands after a phrase, and normally no sound should remain. If a hum lingers, that's a sign some string isn't covered enough. Before raising the tempo, find that string first and deaden it.

On **a 5-string**, muting matters even more. With one extra low B, it hums easily unless you always keep it covered with the thumb. Today, rather than adding sound, focus on **turning off the leaks**.

## ② Visuals

First check the **octave hand shape** — the lower blue is the thumb (root E), the upper blue is the pop (octave E). Today add the back ghost to complete <mark>slap-chick-pop-chick</mark>, but focus on whether the strings you don't play stay quiet. Each example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root E below (thumb), octave E above (pop). The "chick" is on the 3rd string; deaden the rest with your hands.

```json
{
  "id": "m1.w3.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Be sure to keep the low B covered with the thumb.

**Example 1 — slap-chick-pop-chick quarters.** Spread the four strikes one beat wide each and check the muting. Between each strike, watch whether the unplayed strings stay quiet.

```json
{
  "id": "m1.w3.d3.tgpg_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Boom-chick-snap-chick one beat wide each. Check that the low strings don't ring along when you pop.

```json
{
  "id": "m1.w3.d3.tgpg_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** Note and hand shape are the same as on a 4-string. Keep the low B covered with the thumb so it doesn't leak.

**Example 2 — slap-chick-pop-chick eighths.** A full flow with both empty slots filled by "chick." Even faster, hold the muting so <mark>no noise leaks</mark>.

```json
{
  "id": "m1.w3.d3.tgpg_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Boom-chick-snap-chick connects fully. After a phrase, listen for any hum from the unplayed strings.

```json
{
  "id": "m1.w3.d3.tgpg_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes as the 4-string. With one extra low B, pay more attention to thumb muting.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow yesterday's slap-chick-pop a few times at BPM 60 to wake the hand. Today one more "chick" gets added at the back.

**10–20 min · Brain training**
Play Example 1 (quarters) very slowly, focusing between each strike only on <mark>whether the unplayed strings are fully quiet</mark>.

**20–40 min · Real play**
Firm up Example 1 (quarters) at **BPM 60**, then move to Example 2 (eighths) at **BPM 70**. If noise leaks, don't raise the tempo — fix the muting first.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether there's any noise beyond the intended sounds</mark>. Note the BPM you reached today.

**Done when:** you can play slap-chick-pop-chick cleanly at BPM 60–70 with no noise from unplayed strings and the ghost placed accurately, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Low hum after the pop.** When you pop, the lower strings ring along. Rest the side of the right thumb lightly against the low strings.
- **Ghost too loud.** Fussing over muting makes you hit the "chick" hard. Keep the ghost a touch softer than boom and snap, light like a filler.
- **Left hand too narrow.** If the ghost hand covers only one string, the neighbor leaks. Drape your fingers widely across several strings.
- **Neglecting low B (5-string).** With one extra string, B leaks the most. Always keep B covered with the thumb.
