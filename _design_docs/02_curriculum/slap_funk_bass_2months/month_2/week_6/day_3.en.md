---
title: "Slap + Legato — On E Minor Pentatonic"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — Slap + Legato, On E Minor Pentatonic

## ① Theory

For two days you learned the **hammer-on** (going up) and the **pull-off** (coming down) separately. Today you **weave the two into one** and attach <mark>melody</mark> to the slap. The stage is the **E minor pentatonic** — the five notes where funk licks live.

E minor pentatonic is the five notes **E · G · A · B · D**. In degrees, **R · b3 · 4 · 5 · b7**. On the bass they sit neatly at **open E** (4th string), **G** (4th string, 3rd fret), **open A** (3rd string), **B** (3rd string, 2nd fret), and **open D** (2nd string). Moving only between <mark>open strings and the 3rd/2nd frets</mark>, it's a spot just right for slap.

Today's short lick, over these five notes, **slaps with the thumb, goes up with a hammer-on, adds color with a pop, and comes down with a pull-off**. Within one measure, <mark>the hammer-on and the pull-off appear once each</mark>. Slowly at **BPM 75**, focus on whether the attached notes (hammer, pull-off) are as clear as the struck notes. The pentatonic is the lick's **map**. Play only within these five notes and a <mark>funky sound</mark> comes out on its own. Without worrying about straying, lay on **hammers and pull-offs** freely and sing.

On a **5-string**, the notes and the hand shape are the same as on a 4-string. Keep the low **B** deadened with the thumb, and once comfortable, imagine an extension starting on the low B. Once this **short lick** flows today, tomorrow you'll refine it to complete the <mark>pentatonic slap lick</mark>. Today is the last warm-up on the way to that finish. It's not hard, so enjoy it and let your hand learn it. First stamp the five notes onto the fretboard.

```json
{
  "id": "m2.w6.d3.penta_form_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** The five notes sit neatly on the open strings (E·A·D) and the 3rd/2nd frets (G·B). Today's lick is all within this form.

```json
{
  "id": "m2.w6.d3.penta_form_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low **B** deadened with the thumb.

## ② Visuals

Today you place yesterday's **hammer-on and pull-off** onto the **E minor pentatonic**. First run the five notes with a **walk** to settle them into your hand, then repeat the <mark>short lick</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **pentatonic walk**. Run up and down the five notes with the **thumb** (D with a **pop**), letting the hand learn each note's spot in advance.

```json
{
  "id": "m2.w6.d3.penta_walk_4",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Up as R-b3-4-5-b7, then retrace back down. Let the hand memorize the five notes' spots.

```json
{
  "id": "m2.w6.d3.penta_walk_5",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and spots are the same as on a 4-string. Keep the low B deadened with the thumb.

Now the **short lick**. Slap with the thumb, go up with a **hammer-on**, add color with a **pop**, then <mark>land on the root</mark> with a **pull-off**. One measure holds everything you've learned.

```json
{
  "id": "m2.w6.d3.penta_lick_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** E→G hammer-on, A→B hammer-on, D pop, fill the gap with a ghost, then land with a G→E pull-off.

```json
{
  "id": "m2.w6.d3.penta_lick_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Once comfortable, imagine an extension starting on the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow yesterday's pull-off lightly at **BPM 60** to wake the hand. Today, set your ear to the <mark>five pentatonic notes</mark>.

**10–20 min · Brain training**
Run the short lick **very slowly** as below, carving into your hand the spots of the two hammer-ons and the one pull-off.

```json
{
  "id": "m2.w6.d3.penta_lick_slow_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Very slowly. Check that the hammer-ons (E→G, A→B) and the pull-off (G→E) are as clear as the struck notes.

```json
{
  "id": "m2.w6.d3.penta_lick_slow_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Keep the low B covered with the side of the thumb.

**20–40 min · Real play**
Repeat the **short lick** at **BPM 75**. If the attached notes <mark>smear</mark>, drop the tempo and revive the hammer and pull-off into clarity first. Learn it on the 4-string, then confirm the same lick on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the hammer and pull-off are as clear as the struck notes</mark>. Note today's stable BPM too.

**Done when:** you can play a short lick weaving hammer-on, pop, and pull-off over the E minor pentatonic smoothly at BPM 75.

## ④ Tips / Common mistakes

Nudge today's short lick up to **BPM 85** and check that the attached notes stay alive even as it speeds up.

```json
{
  "id": "m2.w6.d3.penta_lick_check_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Check that the **hammer and pull-off** stay clearly alive even as it speeds up a little.

```json
{
  "id": "m2.w6.d3.penta_lick_check_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and the move are the same as on a 4-string. Always keep the low B deadened with the thumb.

- **The notes disconnect.** When slap and legato play apart, the lick stutters. Connect it in **one flow** and roll it smoothly.
- **Only the hammer/pull-off gets quiet.** Force gathers on the struck notes (thumb, pop) easily. Sound **the attached notes at an even size too**.
- **The pop pokes out.** If only the D pop is too strong, the lick gets bumpy. Trim **the pop to the same size as the other notes**.
- **Neglecting low B (5-string).** Absorbed in the lick, B rings easily. Always keep B covered with the side of the thumb.
