---
title: "Ramping Up Sequence Speed (80–90 BPM) + Keeping Accuracy"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
lang: en
---

# Day 3 — Speeding Up Without Losing Clarity

## ① Theory / Explanation

Here's why we're doing this today. You've spent two days chewing through the box with 4-note sequences and 3rd intervals, so now it's time to gradually **<mark>build speed into your hands</mark>.** But here's where a lot of people pause for a moment. Push the tempo up, and the notes tend to blur together — and it's easy to mistake that blur for "getting faster." That's not faster. That's just **losing clarity.**

So today's rule is just one thing: **<mark>the moment your clarity breaks down is your true top speed</mark>.** Start at BPM 65, climb by 5 at a time, and the tempo right before your 16th notes start sticking together — that's your real level today. Respect it. Being perfect at 78 is far stronger than forcing your way to a messy 90.

And today we bring in **<mark>descending</mark>** for real. You've only gone up so far, right? For some reason, most people's hands hold together going up but fall apart going down. Rolling a 4-note sequence from the top string to the bottom especially messes with your picking direction. Conquering this descending motion is what lets you use the box with <mark>"freedom in both directions"</mark> — so when you improvise, you'll have somewhere to escape both up and down.

The goal of speed training isn't showing off your fingers. It's building the control to **<mark>precisely target C (♭3) and A (root) even inside a fast passage</mark>.** Speed is the means, landing on the target is the goal. Don't forget that.

## ② Visual Reference

Same box as before. Today, you'll <mark>roll freely up and down within it</mark>.

```json
{
  "id": "m1.w1.d3.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Today's star is the <mark>4-note **descending** sequence</mark>. You'll roll down from the top of the 1st string toward the 6th string. Pay especially close attention to your picking direction.

```json
{
  "id": "m1.w1.d3.four_note_descending",
  "type": "tab",
  "meta": {
    "title": "4-note (16th) descending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 65 → step it up)**
Loosen up with the 4-note ascending/descending sequence once each at BPM 65. Then climb by 5 in this order: **<mark>70 → 75 → 80 → 85 → 90</mark>.** At each tempo, you have to cleanly pass one ascending and one descending run before moving up. If you can't pass, that tempo becomes today's ceiling. Don't force it higher.

**10–20 min · Brain training (today's target = C·A, quick targeting)**
Metronome at 80. Roll through the descending 4-note sequence, and whenever you mentally shout "now!", **<mark>stop exactly on the next C or A</mark>.** This trains you to target notes on the fly, mid-flow. Pass if you succeed 8 out of 10 times.

**20–40 min · Real-world feel — one-chord improv (Am backing track, BPM 80–90)**
A faster backing track than yesterday. Rule: **<mark>climb with the ascending sequence, come back down with the descending sequence</mark> over 4 bars, and <mark>land on C (♭3) at the end</mark>.** Feel free to mix in the sequences with free improvising, but always close a phrase on a chord tone (C or A). If you're playing fast and it starts blurring, drop the tempo by 5 right away. The worst outcome here is spending 20 minutes playing sloppy.

**40–50 min · Record & reflect (recommended)**
Listen to yesterday's recording next to today's. You'll feel just how much clearer your notes have gotten in two days. Check: is <mark>your picking dragging on the descending run</mark>, or is there a "clunk" spot crossing a particular string pair? If so, isolate that string transition and repeat it 10 times on its own.

**Today's finish line:** clear both the ascending and descending sequence with no blur at your own top BPM (aim for at least 78). Score 8/10 on landing targets on the fly during the fast passage.

## ④ Tips / Common Mistakes

- **Mistaking blur for speed.** Record yourself and you'll catch it instantly. If you can count "da-da-da-da" for the four 16th notes, that's a pass; if it comes out as one blurred "brrrt," that's a fail. Let your ears be the judge.
- **Picking falling apart on the descending run.** Keep alternate picking (down-up) going even when descending. If you drag with all downstrokes just because you're going down, you'll drift off the beat somewhere. Deciding the picking direction of your very first descending note in advance keeps things stable.
- **Tensing up your shoulder and arm as you speed up.** The faster you go, the looser your wrist should actually be. Tense up, and your arm will lock stiff within 30 seconds.
- **Forgetting the target and just showing off your hands.** Today's speed work exists for "fast C targeting." If you get faster but just stop anywhere, three days of work go to waste. Speed is only raw material for control.
