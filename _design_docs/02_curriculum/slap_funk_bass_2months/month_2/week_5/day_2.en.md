---
title: "Onto the 16 Slots — Thumb, Pop, Ghost"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Onto the 16 Slots, Thumb, Pop, Ghost

## ① Theory

Yesterday you filled **16 slots** evenly with the thumb alone. Today you give those slots **color.** Slap is a **drum**, remember — **the thumb (T) is the kick**, **the pop (P) is the snare**, **the ghost is the hi-hat**. Place these three across the same 16 grid and flat sixteenths turn into a <mark>funk groove</mark>.

The key is **which slot gets what**. Today's placement goes like this — the **first slot (1)** of each beat mostly gets the **thumb (root)**, the **fourth slot (a)** gets the **pop (octave)**, and the empty slots between fill with **ghost ("chick")**. When the pop lands on the <mark>very last slot</mark> of the beat, a tension of **nudging into** the next beat is born. That's the seed of **syncopation**, which you'll learn tomorrow.

Your hands already know all this. The **thumb** strikes the open E on the 4th string (dun), the **index finger** snaps the octave on the 2nd string, 2nd fret upward (dak), and the **left hand** lays on lightly for a **pitchless chick**. The hard part is **timing**. Count <mark>**"T-chick-chick-P"**</mark> aloud as you lay the hands on, and the slots grow as clear as if you could see them. At **BPM 70**, very slowly, first make sure each sound lands **exactly on its slot**.

On a **5-string**, the notes and the hand shape are the same as on a 4-string. Keep the low **B** deadened under the thumb and just carve the placement into your hand. Once **T-P-ghost** sit crisply on the 16 slots today, tomorrow you'll **push that placement back** and make real funk syncopation. First, check the hand shape on the fretboard — **root E and octave E**.

```json
{
  "id": "m2.w5.d2.octave_box_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Below is **root E** (thumb), above is **octave E** (pop). The "chick" comes off the 3rd string.

```json
{
  "id": "m2.w5.d2.octave_box_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low **B** deadened with the thumb.

## ② Visuals

Today you place **T · P · ghost** onto the 16 slots. First revive the hand with M1's **eighth-note groove**, then move up to <mark>the 16-slot placement</mark> on top of it. Each example comes in **both a 4-string and a 5-string version**.

First, the **eighth-note groove** (slap-chick-pop-chick). Revive yesterday's feel and let the hand remember **the T and P spots**.

```json
{
  "id": "m2.w5.d2.eighth_ref_4",
  "type": "tab",
  "meta": { "title": "Eighth-note reference groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** Slap (dun)-chick-pop (dak)-chick. This eighth-note spot is the skeleton of today's 16 slots.

```json
{
  "id": "m2.w5.d2.eighth_ref_5",
  "type": "tab",
  "meta": { "title": "Eighth-note reference groove (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **5-string.** The notes and the spots are the same as on a 4-string. Keep the low B deadened with the thumb.

Now stretch that skeleton into **16 slots**. Each beat is <mark>**T-chick-chick-P**</mark> — thumb on the first slot, pop on the last, ghosts between.

```json
{
  "id": "m2.w5.d2.sixteen_grid_4",
  "type": "tab",
  "meta": { "title": "T-P-ghost on the 16 grid (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** Each beat: thumb (1)-chick (e)-chick (&)-pop (a). Feel the pop landing on the **last slot** of the beat.

```json
{
  "id": "m2.w5.d2.sixteen_grid_5",
  "type": "tab",
  "meta": { "title": "T-P-ghost on the 16 grid (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and placement are the same as on a 4-string. Keep the low B covered with the thumb so it doesn't leak.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow yesterday's even 16th-note thumb lightly at **BPM 60** to wake the hand. Today you'll lay <mark>pop and ghost</mark> on top of it.

**10–20 min · Brain training**
Run the placement below very slowly at **BPM 70**, counting **T-chick-chick-P** aloud. Trace with your eyes whether **each sound lands on its slot**.

```json
{
  "id": "m2.w5.d2.grid_slow_4",
  "type": "tab",
  "meta": { "title": "16-grid placement, slow (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Very slowly. Get an early taste of **the pop (a)** calling the next beat.

```json
{
  "id": "m2.w5.d2.grid_slow_5",
  "type": "tab",
  "meta": { "title": "16-grid placement, slow (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and placement are the same as on a 4-string. Keep the low B covered with the side of the thumb.

**20–40 min · Real play**
Repeat the **16-slot placement** at **BPM 75**. If the sounds clump, drop the tempo and split <mark>T-chick-chick-P</mark> back into clarity. Learn it on the 4-string, then confirm the same placement on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether thumb, pop, and ghost sit in their slots</mark>. If the pop smears, hook the index finger a little more.

**Done when:** you can repeat the groove that places T, pop, and ghost across the 16 slots (each beat T-chick-chick-P) at BPM 75 with the sounds clearly distinct.

## ④ Tips / Common mistakes

Nudge today's placement up to **BPM 85** and check that the three sounds still split even as it speeds up.

```json
{
  "id": "m2.w5.d2.grid_check_4",
  "type": "tab",
  "meta": { "title": "16-grid placement check (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Check that **the pop's spot (a)** doesn't slip even as it speeds up a little.

```json
{
  "id": "m2.w5.d2.grid_check_5",
  "type": "tab",
  "meta": { "title": "16-grid placement check (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5-string.** The notes and placement are the same as on a 4-string. Always keep the low B covered with the thumb.

- **The pop smears.** With slots this tight, the index finger tends to rush. Hook it a little more, with the feeling that **the pop pulls upward**.
- **The ghost disappears.** If you just rest on the empty slots, the grid goes loose. Fill even a **pitchless "chick"** to keep it rolling.
- **You rush whenever the pop comes.** Yanking the pop stuck on the beat's last slot too early collapses the beat. Hold **the slot's spot**.
- **Neglecting low B (5-string).** Absorbed in placement, B rings easily. Always keep B covered with the side of the thumb.
