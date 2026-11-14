# Picture checklist

Tick each item. The site fills gaps from NASA automatically, but hand-picked images look best. Save files in `data/img/` and point to them from `data/missions.json` (`image`).

## 1. Mission pictures (17 missions, one cover image each)
- [ ] **Cover image**, wide 16:10, at least 1600×1000, JPG under 400 KB. Used on the Missions grid, the gallery and the big picture on the mission page. File: `data/img/<id>.jpg`
- Files to make in `data/img/`: `apollo11.jpg`, `lrv.jpg`, `alsep.jpg`, `surveyor3.jpg`, `sojourner.jpg`, `spirit.jpg`, `opportunity.jpg`, `viking1.jpg`, `viking2.jpg`, `phoenix.jpg`, `insight.jpg`, `ingenuity.jpg`, `dawn.jpg`, `near.jpg`, `pioneer10.jpg`, `pioneer11.jpg`, `kepler.jpg`.
- [ ] Best picks: the spacecraft itself, a self-portrait, or its landing site. Avoid dark or blurry images and images with text on them.
- [ ] **Credit written down** for each (title, NASA ID or URL, credit line) in `docs/CREDITS.md`.

## 2. Planet surface maps (for the 3D planet)
- [ ] **Mars colour map**, equirectangular 2:1, 2048×1024 or 4096×2048, JPG under 2 MB. File: `data/mars.jpg`, set in `PLANET_TEXTURES`.
- [ ] **Moon colour map**, same format. File: `data/moon.jpg`.
- [ ] Optional height maps `data/mars-bump.jpg`, `data/moon-bump.jpg`, set in `PLANET_BUMPS`.
- [ ] Check the alignment: after loading, click Gale Crater (Mars) or Mare Tranquillitatis (Moon) and make sure the picture matches. If the whole map looks rotated by half, set `TEXTURE_LEFT_EDGE` to `0` for that body in `config.js`.
- Sources: NASA Trek, NASA SVS CGI Moon Kit, USGS Astrogeology.

## 3. Branding and sharing
- [ ] **Social preview image**, 1200×630 PNG or JPG: `docs/og-image.png` (screenshot of the title screen is fine).
- [ ] App icons already included in `icons/`. Replace them only if you have a logo (not the NASA logo).

## 4. Submission materials
- [ ] 5 screenshots for the README and paper: title screen with comet, 3D planet with an info card, mission page, chat with a source line, phone view.
- [ ] A phone screenshot of the installed app.
- [ ] Demo video thumbnail (1280×720).
- [ ] Team photo (optional, for the project page).
- [ ] Architecture diagram image (the README has a text diagram; export a picture if the paper needs one).

## 5. Rules for every NASA picture
- Keep the credit visible or listed in `docs/CREDITS.md`.
- No NASA logo, no implied endorsement.
- Check partner or third-party credits before using an image.
