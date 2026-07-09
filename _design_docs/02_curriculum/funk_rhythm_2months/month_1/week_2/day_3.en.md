---
title: "Mixing — where to place 'ta,' where to place 'chick'"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — Real notes get more sophisticated the more you ration them

## ① Theory

Now that the even ghost carpet is down, today you **<mark>drop real notes onto it</mark>** to make a true groove. Onto yesterday's "chick-chick," deciding which spots get a clear "ta" is the whole of today.

There's one hand position. Today's sound is a small high-register stab on the 3rd and 2nd strings (diagram below). Here, **<mark>pressing the left hand gives a real note ("ta"); releasing gives a ghost ("chick")</mark>.** Same spot, only the pressure differs. So without the hand traveling anywhere, the groove is built from pressure on/off alone.

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

The key principle: **<mark>real notes get more sophisticated the more you ration them</mark>.** Beginners keep sprinkling "ta" everywhere and make noise. Pros stab "ta" in just a spot or two and let everything else flow as "chick." That restraint is <mark>the groove's negative space</mark>. And shifting that "ta" by a single slot makes it sound like a whole different tune — today you'll experiment with that magic yourself.

At first, switching the pressure on and off won't sit in your hand. Of course. Slowly repeat pressing lightly only on the "ta" spot and releasing right after, and at some point your finger flips like a switch on its own. So it's fine if it doesn't click today. This on/off pressure feel becomes <mark>a lifelong weapon for funk guitar</mark>, so it's well worth the time you put in.

## ② Visuals

Today's sound material — a high stab on the 3rd and 2nd strings. From this one spot, left-hand pressure alone moves between <mark>'ta' (real) and 'chick' (ghost)</mark>.

**High-E stab (2 strings).** 3rd string is the root (R), 2nd string the 3rd. Mute the rest firmly. Press this spot for "ta," release for "chick."

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — real + ghost mix (1 bar).** "Ta" on the head of beats 1 and 3, "ta" on the "and" of beat 2, everything else "chick." Three real notes mark the beat.

```json
{
  "id": "m1.w2.d3.mix_1bar",
  "type": "tab",
  "meta": { "title": "Real + ghost mix (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** Know the "ta" spots in advance and press only at those instants. Repeat 4×, listening to the contrast.

**Example 2 — a pushed groove (2 bars).** Alternate "ta" between the head and tail of the beat for a slight delay. This is funk's "grind."

```json
{
  "id": "m1.w2.d3.mix_2bar",
  "type": "tab",
  "meta": { "title": "Real + ghost, syncopated (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** Once easy, shift the "ta" spots slot by slot into your own groove.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Over yesterday's ghost carpet, drop a single "ta" anywhere to warm up <mark>the pressure on/off</mark>.

**10–20 min · Brain training (today's target = placing "ta")**
Count "ta-chick-chick-ta," pinpointing today's "ta" spots. Picture <mark>which 16ths carry the real note</mark>.

**20–40 min · Real groove (Examples 1·2 / BPM 68)**
Repeat **Example 1** (mix) 4× at BPM 68 → then **Example 2** (pushed groove). Once easy, shift the "ta" spots to vary it. <mark>Ration the real notes</mark>.

**40–50 min · Record & reflect (recommended)**
Record and check: <mark>is the ta/chick contrast clear</mark> / <mark>is the timing of real notes accurate</mark> / <mark>is the ghost background clean</mark>?

**Done when:** from one hand position, using only pressure on/off, you can place real notes on the 16ths you choose to build a groove.

## ④ Tips / common mistakes

- **Too many "ta"s.** Frequent real notes make the groove noisy. Just a spot or two; the rest "chick."
- **Moving the hand for "ta."** No need to travel. Same spot, only pressure on/off.
- **Ghosts vanish.** Fixating on "ta," the background "chick" cuts and the carpet disappears. Keep the ghosts going.
- **Timing drags.** Pressing late drags the "ta." Prepare just before that spot arrives.
