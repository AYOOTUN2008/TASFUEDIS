# TASFUEDIS — 30th Anniversary

Responsive single-file HTML/CSS/JavaScript website using official school assets, navy/champagne-gold colours, seven photographs in each cinematic portrait carousel, and the supplied programme.

## Run

```sh
cd /workspace/TASFUEDIS
python3 -m http.server 3000 --bind 0.0.0.0
```

Deploy `index.html` and `assets/` together; no build needed. GitHub pushes trigger the connected Vercel deployment.

## Features

- WebGL ray-marched metallic orbital rings, an embossed CSS 3D anniversary medallion, soft light sweeps, and subtle interactive depth. CSS fallback remains visible if WebGL is unavailable. Rendering pauses offscreen and when the tab is hidden; reduced motion shows a static frame.
- Both seven-photo carousels change every 500ms, using alternating glide, silk, and prism transitions. Portrait frames retain full group photographs with softly blurred background fills. Pause, navigation, focus/hover pause, reduced-motion controls, and slide counters are included.
- School motto: “Education and manners make a man.” This is not labelled as the anniversary theme. The official flyer is shown unchanged.
- Rounded, personalised PNG cards include the school logo, name, role, motto, and current website address. Native file sharing includes a message containing the site URL. WhatsApp/Facebook fallback opens the appropriate link-sharing page and downloads the card for attachment. Instagram/Snapchat use the phone’s file-share menu where supported; otherwise the card downloads and the website link is copied for manual upload. Apps control whether supplied share text is retained; the URL is printed on the card too. No claim of direct social posting or automatic file attachment.
- AY TECH courtesy and the user-supplied WhatsApp contact URL.
- Distinct gradients, restrained page stars/light rays, capped regenerated particles, portrait image-first tributes, and optional opt-in audio.

The low-resolution supplied school logo is used without artificial upscaling claims. Original upload remains outside the checkout. No backend, tracking, or personal-data collection. Optional licensed audio can be enabled by assigning the provided path to `celebrationAudioFile`.
