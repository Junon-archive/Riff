---
title: "Integration Medley: Switching Both Mode and Phrasing Mood in Real Time with Every Genre Change"
dayKey: "m3.w11.d4"
estMinutes: 50
i18nKey: "lesson.m3.w11.d4"
lang: en
---

# Day 4 — Medley: When the Backing Changes, Switch Both the Scale and the Whole Way You Sing

## ① Theory / Explanation

Here's why we're doing this today: over three days you learned blues (Mixolydian, layback), funk (Dorian, tight), and rock (Mixolydian, long-tone bends) separately. Today, you stitch them all together in a single piece. Over a medley backing track flowing blues → funk → rock, **switching both mode and phrasing mood in real time the instant the chord's character changes** — that's this week's final exam.

Let's re-sort the core decision criteria. This is the "switching cheat sheet" you'll be loading into your head today.

- **Blues section (A7-flavored)** → dominant/blues, so **Mixolydian + blue note.** Land on the 3rd, C#, but sing it sticky with **layback and long sustain.**
- **Funk section (Am7–D9)** → minor/modal vamp, so **Dorian.** Land on C (♭3) for Am7 and F# (♮6 = 3rd) for D9, but keep it tight with **palm-muted staccato and razor-clean rests.**
- **Rock section (A5–G5)** → ♭VII power chords, so **Mixolydian.** Land on C# for A5 and B for G5, but sing it powerfully with **bold bends, long tones, and big vibrato.**

Here's today's one big insight: the 3rd targets of all three genres sit right next to each other on the **3rd string, frets 4-5-6 (B, C, C#).** Your hand barely moves — what changes the genre is which fret you pick and how you sing it. In other words, mode switching isn't your hand making a big leap — it's **your judgment and expression switching.**

### 🎙️ Space & Phrasing Mini-Lesson — Medley Edition: The Mood Shift Itself Is the Expression

Today's expression mission is just one thing: **change the entire phrasing mood right at the seam where the genre shifts.**

- **Change the character of the rests:** blues's "loose, dragging space" → funk's "razor-cut space" → rock's "dramatic, wide-open space." The same `rest` breathes differently in every genre.
- **Dress the motif in the genre's clothes:** take the same "land on the 3rd" motif and stretch it out with vibrato in blues, chop it up in funk, and bend it big in rock. One idea, three outfits.
- **Bridge the seam with call-and-response:** take a short phrase you tossed out in the previous genre, and answer it in the new genre's language during the first phrase of the next section — the transition smooths right out.
- **Mark the genre with dynamics:** medium for blues, sharp and clipped for funk, big for rock — let the contrast in intensity alone announce "the genre just changed."

So today's the day you keep landing on the 3rd throughout one medley — but change your mode, your rests, and your dynamics entirely at every seam.

## ② Visual Reference

First up, a **switching decision map** that packs all three genres onto one page. See how **3rd string, frets 4-5-6 (B, C, C#)** line up right next to each other? Rock's G5→B (4th fret), funk's Am7→C (5th fret), blues/rock's A→C# (6th fret). Your hand stays put — only the judgment changes. D9→F# (2nd string, 7th fret) is funk's switching target.

```json
{
  "id": "m3.w11.d4.medley_switch_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Genre switching map (blues A7 / funk Am7-D9 / rock A5-G5) - 3rds on one string",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (blues Mixolydian / funk Dorian / rock Mixolydian)",
    "scale": "Genre switching map",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "A R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "Blues/Rock A-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 2, "label": "Funk Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "Rock G5-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 7, "finger": 4, "label": "Funk D9-3(F#)", "highlight": true, "role": "target" }
    ]
  }
}
```

Second, today's **medley transition phrase.** The genre changes with every measure, and the phrasing flips entirely each time. **Measure 1 is blues** (layback, vibrato, space), **measure 2 is funk** (16th-note palm-muted staccato, tightly packed rests), **measure 3 is rock** (dramatic space → whole-step-bend long tone). The `rest` and `technique` fields themselves show you, as data, just how differently the same 3rd-landing can sound across genres.

```json
{
  "id": "m3.w11.d4.medley_transition_phrase",
  "type": "tab",
  "meta": {
    "title": "Medley transition phrase (blues -> funk -> rock) with mood switching",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Mixolydian / Dorian / Mixolydian)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "blues breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3>3(C>C#)", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true, "label": "rock breath" },
        { "string": 3, "fret": 4, "duration": "quarter", "dotted": true, "technique": "bend", "bendTarget": "full", "label": "B>C#(A5-3)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A5-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 92) — shuttle across three genres' 3rds**
At the medium tempo of 92, shuttle across **3rd string, frets 4-5-6 (B, C, C#)** on the switching map. But change your technique with each fret — stretch out the 6th fret with vibrato (blues), snap-cut the 5th fret with palm muting (funk), and bend the 4th fret up to the 6th fret (rock). Moving between three moods from the same hand position is today's warm-up.

**10–20 min · Brain training — reciting the switching cheat sheet**
Metronome off. Say out loud, "blues means Mixolydian, C#; funk means Dorian, C↔F#; rock means Mixolydian, C#↔B" while fretting the corresponding notes. You pass once, upon hearing a genre named, your hand reaches the right 3rd within half a second. This is the reflex you need for real-world switching.

**20–40 min · Real-world improv (blues→funk→rock medley backing / 88–92 BPM) — mood-switch mission**
Chain together backing tracks from different genres (blues jam → funk jam → rock jam), or put on one medley track. Three missions. ① Switch modes at each section. ② Land on that section's 3rd. ③ **Completely change the phrasing mood (character of rests, dynamics, technique) right at each seam.** In the first phrase after a transition, answer the previous genre's motif in the new genre's language to keep it smooth.

**40–50 min · Record & reflect (recommended)**
Record 40 seconds of your medley jam. Listen back for just three things — ① Did the mode actually change at each genre transition? ② Did you land on the 3rd in each section? ③ **Can you hear "this is where it switched from blues → funk → rock" even with your eyes closed** (from the contrast in rests and dynamics)? Slow down playback if needed to zoom in on your picking timing and rest placement around the transitions.

**Today's finish line:** switch mode, 3rd, and phrasing mood together across all 3 genre transitions. If you can tell the transition points apart just by ear when you listen back, you've passed this week.

## ④ Tips / Common Mistakes

- **Switching the mode but keeping the mood the same.** This is today's biggest trap. Even if you switch scales, if your expression — layback, staccato, long tone — doesn't change, the genre won't come through. It's not the note choice but the way you sing that gives a genre its identity.
- **Fumbling at the transition seam.** Anticipate the chord change ahead of time, and aim your last note toward the next 3rd in advance. Judge too late and the beat falls apart right at the seam.
- **Assuming you need to move your hand far.** All three genres' 3rds live on the 3rd string, frets 4-5-6. Your hand barely moves. Remember: what changes is your judgment and expression.
- **Getting stuck in one genre.** Don't blur everything into whatever mood is most comfortable for your hands (usually blues). Go genuinely short in the funk section, genuinely big in the rock section. The bigger the contrast, the more the medley comes alive.
