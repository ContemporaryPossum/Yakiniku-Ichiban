# Yakiniku Ichiban — Website

Premium single-page site for Yakiniku Ichiban (Japanese BBQ, Jalan Song, Kuching).

## Structure
```
index.html          <- site (served at repo root, Netlify/Vercel ready)
assets/style.css    <- all styling
assets/script.js    <- menu tabs, mobile nav
assets/logo.jpg     <- restaurant logo (from their Instagram)
```

## Deploy
1. Push these files to the root of a GitHub repo.
2. Connect the repo to Netlify (or Vercel). No build command, no config — it's pure static.
3. Publish directory: `/` (root).

## Imagery
All photography lives in `assets/` (hero.jpg, story-*.jpg, menu-*.jpg) — AI-generated
placeholders in the restaurant's style. To swap in real photos later, just overwrite
the files keeping the same names (JPG, roughly the same aspect ratios:
hero 16:9, story-wagyu 2:3, story-grill / story-interior 4:3, menu-* 16:9).

Tip: iPhone HEIC photos must be converted to JPG/WebP first
(`Settings > Camera > Formats > Most Compatible`, or export via Photos app).

## Business facts baked in
- Hours: Mon–Fri 5–10 PM; Sat–Sun 11 AM–2 PM & 5–10 PM
- Phone: 011-2186 0130 · WhatsApp Marcus 012-569 9907
- Instagram: @yakinikuichiban
- Menu prices as published on their Instagram menu (Jan 2026 post) — update `index.html` if prices change.
