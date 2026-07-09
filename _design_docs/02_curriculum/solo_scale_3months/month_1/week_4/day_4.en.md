---
title: "One-Chord Jam Recording → Self-Feedback → Month 1 Wrap-Up"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
lang: en
---

# Day 4 — Month 1's Finish Line: Record, Listen, Coach Yourself

## ① Theory / Explanation

Here's why we're doing this today. Today isn't about learning a new skill. It's the day we pull together everything we've built over the past four weeks into a single performance, **record it, and become our own coach** to give ourselves feedback. The truth is, skill grows the most not while you're practicing, but while you're **taking a step back and listening to your own playing with a calm, honest ear.** Pros don't obsess over recording for nothing.

Let's look back at the past month. In Week 1, we chewed through Box 1 of the pentatonic scale with sequences and learned to land on the chord tone (♭3). In Weeks 2 and 3, we connected the rest of the boxes across the whole neck. And this Week 4, we learned ♭5 blue notes + bending + vibrato + phrasing. Today we melt **all of it** into one one-chord jam.

Today's jam is built around **call and response** — asking and answering. Throw out a question with one phrase (leave it open), then answer it with the next phrase (close it). It's fine for the question to stay a little vague — in fact, cutting it off slightly uneasily on ♭5 or the 4th creates that "what's next?" tension. The answer, though, must always close firmly by **landing on ♭3 or the root + vibrato.** With this conversational structure, even improvising over a single chord never gets boring. And today's real goal isn't a flashy performance — it's building the **record → self-feedback loop** into your habits. That's something you'll use for all three months, and honestly, for the rest of your playing life.

So today, you graduate Month 1. Don't put pressure on yourself — go into it light, just checking in on how much of the past four weeks has actually settled into your hands.

## ② Visual Reference

Here's today's jam "cheat sheet" — the whole A blues Box 1, with landing points (♭3, green) and passing tones (♭5, purple) at a glance. If you get lost mid-jam, just look at this.

```json
{
  "id": "m1.w4.d4.a_blues_box1_cheatsheet",
  "type": "scale_shape",
  "meta": {
    "title": "A blues scale Box 1 — jam cheat sheet (targets & blue notes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

This is the capstone lick that wraps up the whole month — a 4-measure call and response. **Measure 1 is the question** (descending through the ♭5 passing tone, leaving it open on the root). **Measure 2 is a short motif after a gap** (♭5 with vibrato). **Measure 3 is the answer's development** (a full-step bend exclamation point). **Measure 4 is the landing** (slide → ♭3 with a wide vibrato period). Everything you learned this month is packed in here.

```json
{
  "id": "m1.w4.d4.capstone_call_response_lick",
  "type": "tab",
  "meta": {
    "title": "1-month capstone — call & response over Am7 (all skills combined)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 1, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 4, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "4>b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
Light warm-up. Run A blues Box 1 in 3rds, ascending and descending, once each, then run yesterday's 3-measure phrase once. Then play through today's capstone lick slowly, once, start to finish. It's fine for warm-up to be short today — the main event is the recording.

**10–20 min · Brain training (getting a feel for the capstone lick + call/response)**
Get the capstone lick into your hands while staying aware of its structure. Play through it while saying out loud, **"question~ answer!"** to mark the "measure 1 is the question (open), measures 3–4 are the answer (closed)" conversation structure. Pay special attention to the **rest (the gap) before measure 2** — actually leave it empty. Beginners can't stand this silence and rush to fill it with notes, but that empty space is exactly what brings the next phrase to life.

```json
{
  "id": "m1.w4.d4.capstone_call_response_lick",
  "type": "tab",
  "meta": {
    "title": "1-month capstone — call & response over Am7 (all skills combined)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 1, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 4, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "4>b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

**20–40 min · Real-world improv & full recording (Am7 one-chord backing, 75–80 BPM)**
Today's main event. Play the backing track and record **the whole 2–3 minutes, start to finish** (a phone voice memo is fine). Rule: **converse via call and response.** Leave question phrases open on ♭5 or the 4th, and always close answers by landing on ♭3 or the root + vibrato. Use the capstone lick as a seed, but don't just repeat it — vary it gradually. If you slip up, don't stop, keep going — real playing never stops.

**40–50 min · Self-feedback (mandatory today)**
Listen to your recording start to finish, and coach yourself using the checklist below. Slow down playback if you need to, so you can zoom in on bending and vibrato moments.

**[Self-Feedback Checklist]**
1. Did phrases end by landing on a chord tone (♭3/root), or did they just trail off anywhere?
2. Did ♭5 brush past as a passing tone, or did it sit awkwardly?
3. Did bends land exactly on the target pitch (full = 5th, half = ♭5)?
4. Did vibrato sing beautifully at a consistent rhythm, or did it shake like it was scared?
5. Was there space (rests), or did you pour out notes non-stop?
6. Did the whole thing sound like a conversation (call/response), or just a list of scale notes?

**[Month 1 Wrap-Up — Graduation Checklist]**
- ☐ Freely play A minor pentatonic Box 1 with sixteenth-note and 3rd-interval sequences
- ☐ Deliberately land phrases on ♭3 (the chord tone)
- ☐ Melt in the ♭5 blue note as a passing tone for that blues color
- ☐ Bend to accurate pitches (half/full step, reference-matched by ear)
- ☐ Sing landing notes with a consistent-rhythm wrist vibrato
- ☐ Run the record → self-feedback loop

**Today's finish line (= Month 1 graduation criteria):** record a full 2+ minute jam over the Am7 backing track, and complete self-feedback across all 6 checklist items. **4 or more "OK" out of 6 = pass** — anything you didn't check off will naturally get reinforced as you move into Month 2, Week 5.

## ④ Tips / Common Mistakes

- **Skipping the listen-back.** This is today's #1 mistake. Recording exists so you can *listen*. It's completely normal to cringe the first time you hear your own playing — enduring that cringe is the toll you pay for getting better. Make sure you listen all the way through.
- **Fear of empty space.** If silence scares you into filling every gap with notes, your answers never come alive. Rest for at least half a measure after a question. That silence is what gives the next phrase its weight (we'll dig into this properly in M3 W11).
- **Stopping over a mistake.** Stopping because you hit a wrong note during the jam is the bigger mistake. Real playing doesn't stop. Even if a wrong note comes out, slide up a half step or over to a chord tone to recover, and it can actually sound intentional. That's the real skill of improvisation.
- **Letting perfectionism steal your day.** Of course you're not going to pull off a flashy solo one month in — that's completely normal. Today's goal isn't "playing well," it's building the **habit of recording and giving yourself feedback.** 4 out of 6 on the checklist is a solid graduation. Whatever's left, we'll pick back up in Month 2.
