---
title: "Composing Motifs and Phrases — Toss Out a Line, Then Answer It"
dayKey: "m3.w12.d2"
estMinutes: 50
i18nKey: "lesson.m3.w12.d2"
lang: en
---

# Day 2 — Turning a Scale Run into "Music": Throwing a Motif and Answering It with Variation

## ① Theory / Explanation

Here's why we're doing this today. Yesterday you drew the landing map. But a map alone is still just "picking notes" — not yet "music." 90% of beginner improv falls apart right here — because **you never stop playing.** Pour out nonstop notes and the listener runs out of breath. Remember the space and phrasing we learned back in Week 11? Today we plant that inside your composition.

Today you've got two weapons: **motif** and **call and response.**

- A **motif** is a short idea — a single fragment of 2-4 notes. The whole song grows from this one seed. Our motif stays dead simple: **D → E → C (landing on ♭3) → (silence).** Toss three notes, then rest. That "silence" is the key. The rest is what gives the C you just played its weight.
- **Call and response** is a conversation. You take the motif you just tossed out (the call) and **answer it back with a slight variation (the response).** Repeat it exactly and it's boring; change it completely and they're strangers. "Same words, different inflection" — that's variation.

And there's one more thing you'll sneak in today. Carry the response **all the way into the A7 section and swap C (♭3) for C# (major 3rd)** as you answer. That's the one-fret switch from yesterday! The moment the same motif gets tossed in Dorian and answered in Mixolydian, the song gains a "story." This becomes the backbone of your solo.

## ② Visual Reference

First, the **call (the motif in its original form).** Over Am7, toss out D-E-C, then rest for a full half bar. A light vibrato on that final C. See that big rest (`rest`) baked right into the data? That's today's main character.

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

Second, the **response (answering with variation).** Stretched out to two bars. Bar 1 answers over D7 with F# (the major 6th color), and bar 2 crosses into A7, **switching to C# (major 3rd)** as it answers. A ♭7 (G) color tone gets tacked on at the very end. Same "shape" as the call, but you can feel the landing has changed, right?

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 92) — warm up your hands with 3rd intervals**
To the metronome at 92, run a pattern of interval-of-a-3rd jumps inside the "one home" position. Fret a note, fret the note a 3rd above it, move up one spot, repeat. Yesterday it was four-note sequences — today it's 3rd jumps. This keeps loading phrase material into your hands.

**10–20 min · Brain training (getting the motif into your hands)**
No backing track — just repeat the call motif (D-E-C + rest) 10 times. **Sing it along with your voice too** — "da-da-daaah... (rest)." Then layer in the response. Alternate between the call and response, and train yourself to resist the urge to fill that awkward "silence" between them. That restraint is today's real skill.

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

**20–40 min · Real composing (Am7-D7-A7 backing / 88–92 BPM)**
Start the backing track and layer call → response over the actual chords. Then comes the real composing part: **answer the response slightly differently every time.** Sometimes hold F# longer, sometimes switch to C#, sometimes leave a bigger gap. Pick 2-3 variations you like and remember them. That's the raw material for tomorrow's finished solo.

**40–50 min · Record & reflect (recommended)**
Record one round of call-and-response with any recording tool you've got. Listen back and check just one thing: **does the silence actually sound like silence, or did I unconsciously fill it in?** If you filled it, try stretching the rest by half a beat more tomorrow.

**Today's finish line:** Play the call motif from memory. Build at least 2 variations for the response, and successfully land the version that switches to C# over A7, over the backing track.

### Self-feedback checklist (today's focus: phrasing)
- [ ] **3rd-landing accuracy** — the call landed precisely on C (♭3), the response on F#/C#.
- [ ] **Color tone use** — layered F# (major 6th) and G (♭7) so they sound like color, not just passing notes.
- [ ] **Vibrato stability** — applied a steady, even vibrato to the landing notes (C·F#·C#).
- [ ] **Rhythm timing** — the length of the rest stayed steady, keeping the call/response contrast alive.

## ④ Tips / Common Mistakes

- **Can't stand the silence, so you fill it.** The most common one. Your hands get itchy during the rest and cram in a note. That turns a conversation into a monologue. When it's time to rest, actually rest. Silence is playing too.
- **Turning the variation into a "completely different phrase."** The response should be a cousin of the call, not a stranger. Change just one of the note order or the rhythm, and keep the rest the same. That's what lets the ear recognize, "oh, that's them again."
- **Making the motif too long.** 2-4 notes is plenty. A long motif leaves no room to vary or repeat it. Short motifs are what let a song grow.
- **Not making the switch (C→C#) land.** The moment the response crosses into C# is this song's "twist." Don't just glide past it — stamp it with a light vibrato.
