# TASFUEDIS — 30th Anniversary

A mobile-first single-page HTML/CSS/JavaScript celebration for Tai Solarin Federal University of Education International School, using the school’s supplied logo, navy/gold flyer palette, and selected photographs.

## Run

```sh
cd /workspace/TASFUEDIS
python3 -m http.server 3000 --bind 0.0.0.0
```

Deploy `index.html` and `assets/` together to any static host. No build or application dependencies. Optional Google Fonts have local fallbacks.

## Content

Official flyer details: Day 6 Grand Finale, 7 October 2026, 10am, School Hall. Commissioning of projects, award presentations and celebration. Theme: “Education and manners make a man.” Original uploaded archive is preserved outside the checkout. Selected photographs are resized only when necessary and converted to WebP; no retouching or artificial upscaling. Landscape groups are preserved in portrait tribute frames without cutting people off. The compact, supplied 200×132 school logo is used without claiming increased resolution.

Features: cinematic CSS light sweep and animated anniversary emblem, three-slide portrait carousel and five-slide past-events carousel (0.50-second intervals) with accessible pause/navigation controls, four image-first tributes, past-event slideshow, official flyer, personalised downloadable PNG keepsake with school crest, sharing, capped ambient particles, scroll reveals, reduced-motion support, finale and courtesy section. No backend or personal-data collection.

## Remaining optional details

Courtesy attribution, WhatsApp number and pre-filled message are not yet supplied. The courtesy CTA links to the keepsake section until then. Replace it with a properly URL-encoded WhatsApp anchor when provided. Optional licensed audio: set `celebrationAudioFile` to an actual provided asset path to enable the opt-in music modal; no autoplay or looping. A higher-resolution or vector school logo would improve large-screen sharpness.
