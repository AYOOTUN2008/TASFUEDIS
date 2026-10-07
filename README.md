# TASFUEDIS — 30th Anniversary

Responsive single-file HTML/CSS/JavaScript website using official school assets, navy/champagne-gold colours, twelve photographs in each cinematic portrait carousel, and the supplied programme.

## Run

```sh
cd /workspace/TASFUEDIS
python3 -m http.server 3000 --bind 0.0.0.0
```

Deploy `index.html` and `assets/` together; no build needed. GitHub pushes trigger the connected Vercel deployment.

## Features

- Real Three.js product scene with extruded/bevelled gold numerals, a navy enamel face, school crest, metallic rims, 3D orbital arcs, studio reflections, moving lights, bloom and a camera reveal. Pause and replay controls are included. The CSS emblem remains as a WebGL fallback; rendering stops offscreen/hidden and respects reduced motion.
- Both twelve-photo carousels change every 500ms, using alternating glide, silk, and prism transitions. Portrait frames retain full group photographs with softly blurred background fills. Pause, navigation, focus/hover pause, reduced-motion controls, and slide counters are included.
- School motto: “Education and manners make a man.” This is not labelled as the anniversary theme. The official flyer is shown unchanged.
- Rounded, personalised PNG cards include the school logo, name, role, motto, and current website address. Native file sharing includes a message containing the site URL. WhatsApp/Facebook fallback opens the appropriate link-sharing page and downloads the card for attachment. Instagram/Snapchat use the phone’s file-share menu where supported; otherwise the card downloads and the website link is copied for manual upload. Apps control whether supplied share text is retained; the URL is printed on the card too. No claim of direct social posting or automatic file attachment.
- AY TECH courtesy and the user-supplied WhatsApp contact URL.
- Distinct gradients, restrained page stars/light rays, capped regenerated particles, portrait image-first tributes, and optional opt-in audio.

The low-resolution supplied school logo is used without artificial upscaling claims. Original upload remains outside the checkout. No backend, tracking, or personal-data collection. Optional licensed audio can be enabled by assigning the provided path to `celebrationAudioFile`.

## Rebuild the 3D hero

The ready-to-serve bundle is committed at `assets/hero-3d.js`; production needs no runtime CDN. The maintainable source is `src/hero.js`.

```sh
npm ci
npm run build:hero
```

Three.js and esbuild are pinned in the lockfile. Keep the existing Vercel Framework Preset **Other** and no build command for static deployment. Three.js licence is in `assets/THREE-LICENSE.txt`. `assets/hero-preview.mp4` is a recorded mobile browser preview, not a replacement for the live 3D animation.

Principal’s greeting: Mrs Omogele A. A.’s supplied flyer and verbatim speech appear directly after the hero. A short excerpt is visible; native details/summary expands the full message. Five newly supplied cultural-programme photos are included in both carousels, with complete group framing and neutral captions.

Arrival effect: one golden firework launches from the viewport bottom to the upper hero and bursts once on page entry. It uses capped CSS particles, never intercepts input, cleans up after 3.6 seconds, and is skipped for reduced motion or hidden pages. It does not loop or replay on scrolling.
