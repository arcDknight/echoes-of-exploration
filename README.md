# Echoes of Exploration
NASA Space Apps Challenge 2026. Kids explore the Moon and Mars, click any spot on a 3D planet, and wake up retired spacecraft to chat with them. Every answer is grounded in verified mission facts and shows its source.

> **New here? Read `docs/START_HERE.md`** for setup (Git, Groq, Render), checklists and the file map.

## How it works
```mermaid
flowchart LR
  D[Challenge dataset] -->|config.js adapt| W[Website: map, 3D planet, mission pages]
  W -->|question + that mission's facts| S[FastAPI /chat]
  S --> L[LangChain + free LLM (Groq / Gemini)]
  L -->|reply + fact used| S --> W
  W -->|shows reply + source| K((Child))
```
The AI may only use the facts it is sent and returns which fact it used, so the science stays accurate and checkable. If the server is down, the site falls back to built-in fact replies.

## Features
Installable on phones like an app (PWA, works offline after first visit) · Comet-crossing title screen · live NASA photos and image library on mission pages · 3D Moon/Mars globe with clickable sites · mission pages with smooth transitions · AI chat in each spacecraft's voice · source shown under every answer · reading level (ages 6–8 / 9–12) · voice input and read-aloud · "View on planet" links · badges.

## Plug in the challenge data
Edit only `config.js`: set `SOURCE_URL`, match fields in `adapt()` (a `source` per mission or per fact is credited under answers), and optionally `SITES_URL` and `PLANET_TEXTURES` (real equirectangular maps).

## Run locally
```
cd server && pip install -r requirements.txt
cp .env.example .env     # add a free GROQ_API_KEY (never commit it)
uvicorn main:app --reload   # open http://localhost:8000
```
No AI key at all? `python3 -m http.server` works with built-in replies.

## Deploy
Site and API on one URL: create a Render web service from this repo (uses `render.yaml`), add `GROQ_API_KEY`. Static only: GitHub Pages (chat uses built-in replies).

## Data and credits
Sample mission and landmark data was written from memory of NASA public mission pages and must be checked against the official challenge source. Surfaces are procedurally generated unless real maps are supplied. three.js (MIT), Inter Tight font (OFL). License: MIT.

## NASA data and pictures
See `docs/NASA_DATA.md` (APIs, keys, sources) and `docs/IMAGE_CHECKLIST.md` (which pictures to add).

## Security and sources
`docs/SECURITY.md` (A–Z security checklist, abuse tests, cleanup) and `docs/SOURCES.md` (everything this project uses). Run `python scripts/check-secrets.py` before every push.

## Submission help
`docs/SUBMISSION.md` has the 6W+1H, the 30-second pitch, the research-paper outline and a map from the judging rubric to this project.

## Mission list
The 17 missions come from the NASA Space Apps challenge resource list (NSSDCA and science.nasa.gov): Moon (Apollo 11 Eagle, Lunar Roving Vehicles, ALSEP, Surveyor 3), Mars (Sojourner, Spirit, Opportunity, Viking 1, Viking 2, Phoenix, InSight, Ingenuity) and deep space (Dawn, NEAR Shoemaker, Pioneer 10, Pioneer 11, Kepler). Each mission credits its NASA page under every answer.
