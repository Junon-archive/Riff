---
title: "Slide — glide into and out of the note"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — Giving a note expression with the slide

## ① Theory

You pushed with bends and shook with vibrato; today let's connect note to note by 'gliding.' The **slide** is a technique where you fret one fret, don't lift the finger, and push to another fret, joining two notes into **one line**. <mark>A slide is like joining two words smoothly when you speak instead of cutting them off dead.</mark> Poke notes one by one and it's stiff, but glide into them and the note gains 'expression.' Half the reason the blues sounds so much like talking lives in this slide.

The slide splits into two by direction. Pushing up from a low fret to the target is **sliding in**, and letting go downward from the target without lifting the finger is **sliding out**. <mark>Going in, stop exactly on the target; coming out, release the pressure with a smooth trail.</mark> The key is not lifting the finger off the string the whole way. Lift it and the sound cuts — then it's not a slide, just two notes.

Today's stage is Box 1's **3rd string**. You slide up from b3 (5th fret) to the 4th (7th fret), then back down. The note the slide arrives at is marked green — <mark>stopping exactly on that note is all of the slide.</mark> One more thing: the slide connects naturally with bends and vibrato. You can push the slid-into note straight into a bend, or shake the landed note with vibrato. Tomorrow we'll merge these three tools into one, so today, polish the slide **clean**.

```json
{
  "id": "m2.w6.d3.slide_intro",
  "type": "tab",
  "meta": { "title": "Slide into and out of a note (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **BPM 60.** Slide up on the 3rd string from b3 (5th fret) to the 4th (7th fret), then slide back down from the 4th to b3. Listen for whether the two notes join into one line.

## ② Visuals

Let's look at today's sliding route on the fretboard. Start at **the b3 at the 3rd string, 5th fret** and slide up to **the 4th at the 7th fret**. The arrival, the 4th, is marked green.

```json
{
  "id": "m2.w6.d3.slide_route",
  "type": "scale_shape",
  "meta": { "title": "Slide route on the G string (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **Slide with the same finger.** Fret the 5th fret with finger 1 and, without lifting, push up to the 7th fret.

<mark>You have to stop exactly on the arrival fret for the pitch to be right.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. Without sliding, alternate fretting **the 3rd string 5th and 7th frets** to learn the distance between the two notes.

```json
{
  "id": "m2.w6.d3.warmup",
  "type": "tab",
  "meta": { "title": "G string b3-4 warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60.** Fret b3 and the 4th crisply to get to know the two points you'll slide between.

**10–20 min · Brain training (today's target = stop exactly on the arrival fret)**
Before you slide, set the arrival fret with your eyes and ears. Decide in advance that you **stop dead at the 7th fret**. <mark>Without a set arrival, the slide overshoots or falls short of the target.</mark>

**20–40 min · Real slide practice (BPM 60)**
First slide into the root. Push up from b7 (5th fret) to the root (7th fret), then bring it alive with vibrato.

```json
{
  "id": "m2.w6.d3.slide_into_root",
  "type": "tab",
  "meta": { "title": "Slide into the root from below", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **Slide into the root.** Push from the 5th fret to the root at the 7th fret, then shake it from the wrist.

Now slide in and out as one phrase. Slide in, and at the end, slide out.

```json
{
  "id": "m2.w6.d3.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide in, slide out — a talking phrase", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **Slide in and out.** Slide from b3 into the 4th, play the 5th, then let the last note trail downward.

<mark>Only by not lifting the finger the whole way does the sound join into one.</mark>

**40–50 min · Recording**
Record a phrase that slides in and out. Listen for whether the gliding sound joins into one without cutting.

**Today's completion criteria:** You slid in from a low fret to the target and stopped exactly, and can slide out without lifting the finger.

## ④ Tips / Common Mistakes

Common mistakes with slides. The 'point' you arrive at matters more than the 'process' of gliding.

```json
{
  "id": "m2.w6.d3.dont_lift",
  "type": "scale_shape",
  "meta": { "title": "Keep the finger pressed through the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "target" }
  ]}
}
```
▶ **Same finger, pressed all the way.** Slide from the 5th fret to the 7th (green) while keeping the pressure.

- **Lifting the finger midway.** The sound cuts and the slide vanishes. Press the string down until you arrive.
- **Overshooting the arrival fret.** Get drunk on gliding and pass the target, and the pitch is wrong. Stop dead at the target.
- **Sliding while pressing too hard.** The scraping noise grows loud. Press just enough to glide; ease off a little.
- **Only practicing sliding in.** The slide out is expression too. Learn to trail the end of a phrase downward as well.
