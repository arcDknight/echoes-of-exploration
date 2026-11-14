# Echoes of Exploration: complete guide (start here)

Everything that was built, how to set it up safely (Git, Groq, Render), and every checklist in one place. Detailed files are listed in section 2.

## 1. What was built
**Website (works on phone and desktop, installable like an app)**
- Home screen: giant title, a comet that crosses it every 7–11 seconds, twinkling stars, scroll-fading statement, About section, footer, full-screen Menu.
- Map: Moon / Mars / Deep space switch, retired spacecraft as outlined rings, active ones as solid dots.
- Missions grid: View 1 / 2 / 4 columns with a smooth glide between layouts.
- Mission pages: tile picture grows into a full-screen page; scroll shows the details table, a live scroll percentage, facts, "View on planet", "Talk to…", "Next" and "Back".
- NASA material on each mission page: pictures from the NASA Image and Video Library and live rover photos, with credit lines.
- 3D planet page: drag to spin, scroll or pinch to zoom, click anywhere for site info (named landmarks, nearest feature, nearby spacecraft). Detailed generated Moon and Mars surfaces, or your own real NASA maps.
- AI chat in each spacecraft's voice: answers come only from verified mission facts, show their source, have two reading levels (6–8 and 9–12), voice input and read-aloud, and badges.
- Works offline after the first visit (service worker), with built-in fact replies if the AI is unavailable.

**Backend (free AI)**
- FastAPI + LangChain, switchable between Groq (default, free), Google Gemini (free) and OpenAI (paid).
- NASA rover-photo proxy so the NASA key stays on the server.

**Security**: key protection, rate limits, input caps, strict fact checking, prompt-injection defenses, security headers, secret scanner, abuse tests, Dependabot.

**Hackathon material**: pitch, 6W+1H, paper outline and rubric map; picture checklist; NASA data guide; sources list.

**Testing done**: server tests (limits, errors, file exposure, headers, CORS, rate limit), a simulated-browser click-through of the site, planet math, and a secret scan. All passed. Not tested: the real AI against prompt injection, the deployed Render site, real phones, live NASA API calls.

## 2. File map
| File | What it is |
|---|---|
| `index.html` | Main site |
| `planet.html` | 3D Moon/Mars page |
| `config.js` | **The only file to edit on challenge day** (data source, field mapping, NASA settings) |
| `data/missions.json`, `data/sites.json` | Sample data (check facts before presenting) |
| `data/img/` | Put your mission pictures here |
| `server/main.py` | AI backend and security |
| `server/.env.example` | Blank template for your keys (copy to `.env`) |
| `run.bat` / `run.sh` | One-click local start (Windows / Mac, Linux) |
| `render.yaml` | Free Render deployment settings (contains no secrets) |
| `scripts/check-secrets.py` | Scans for leaked keys before you push |
| `scripts/abuse_test.py` | Attack tests against your running server |
| `.github/` | Automatic secret scan and Dependabot |
| `docs/START_HERE.md` | This guide |
| `docs/SECURITY.md` | A–Z security checklist and steps |
| `docs/SOURCES.md` | Every source used |
| `docs/NASA_DATA.md` | How to use api.nasa.gov, data.nasa.gov and other NASA sources |
| `docs/IMAGE_CHECKLIST.md` | Every picture you need |
| `docs/SUBMISSION.md` | 6W+1H, 30-second pitch, paper outline, rubric map |

## 3. One-time setup (Windows)
1. Install **VS Code** (code.visualstudio.com), **Python 3.10+** (python.org, tick "Add Python to PATH") and **Git** (git-scm.com). Restart VS Code.
2. Unzip the project into Documents. In VS Code: **File → Open Folder** and pick `echoes-of-exploration`.
3. Install the **Live Server** extension. Right-click `index.html → Open with Live Server`. The site works (chat uses built-in replies).
4. Check: 6 mission tiles, tile opens a mission page, Menu has "3D planet", globe spins.

## 4. Groq (free AI), safely
1. Sign up at console.groq.com. Create a **new key used only for this event** and name it clearly, for example "hackathon".
2. Copy it once. Never paste it into chat, screenshots, code files or `config.js`.
3. Double-click `run.bat` (first run installs everything). When it says "Open http://localhost:8000", press Ctrl+C.
4. Open `server/.env` and paste the key after `GROQ_API_KEY=` (no spaces or quotes). Save.
5. Run `run.bat` again and open **http://localhost:8000**.
6. Test: open Opportunity → Talk to Opportunity → ask a question. A rover-style answer with a grey "Source:" line means the AI works. A word-for-word fact means the fallback is running; read the server window for the line starting "LLM error".
7. If your Groq console offers a key expiry, set a few days. Delete the key after the event.

## 5. GitHub, safely
1. Create a free account at github.com. **New repository** → name `echoes-of-exploration` → Public → leave "Add a README" unticked.
2. In the repo on GitHub: **Settings → Code security** (names may vary slightly). Turn on **Secret scanning**, **Push protection** and **Dependabot alerts**.
3. In a VS Code terminal at the project folder (not inside `server`):
   ```
   python scripts/check-secrets.py
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   git init
   git add .
   git status
   ```
   `server/.env` must **not** appear in the `git status` list. The script must print `OK`.
4. Then:
   ```
   git commit -m "Echoes of Exploration"
   git branch -M main
   git remote add origin https://github.com/yourname/echoes-of-exploration.git
   git push -u origin main
   ```
5. After pushing run `git ls-files` and confirm `server/.env` is absent. Refresh GitHub and check the Actions tab shows the "security" check passing.
6. **If a key ever got pushed:** revoke it first in Groq, then remove it, then delete and recreate the repo (simplest) or scrub history with `git filter-repo`, before sharing the link.
7. Later updates: `git add .` → `git commit -m "what changed"` → `git push`.

## 6. Render (live site + AI), safely
1. Sign up at render.com with your GitHub account. If Render asks for a payment method for the free web service, you can skip Render and use GitHub Pages plus a recorded demo instead (I could not verify Render's current signup rules).
2. **New → Blueprint** and pick your repo. Render reads `render.yaml`.
3. When asked for secrets, or afterwards under your service → **Environment**, add `GROQ_API_KEY` (your hackathon key). Optionally add `NASA_API_KEY` (free at api.nasa.gov). **Never put keys in any file in the repo.**
4. Deploy and wait. Open the link it gives you: it must start with `https://`.
5. Test the live link in a private window on your phone: chat, 3D planet, install option in the Menu.
6. Check the browser (F12 → Network → use the chat): calls go to your own address, and no key appears in Headers or Payload.
7. Run the attack tests once: `python scripts/abuse_test.py https://your-app.onrender.com`. Wait a minute before demoing, because it uses your rate limit.
8. Before judging: open the link 10 minutes early (the free server sleeps when idle), and `/health` shows `{"ok":true}` when awake.
9. If the website is hosted elsewhere and only the AI is on Render, set `ALLOWED_ORIGINS=https://yourname.github.io` on Render.
10. GitHub Pages backup (Settings → Pages → `main` / root): site only, chat uses built-in replies.
11. After the event: delete the Groq and NASA keys, and delete or suspend the Render service.

## 7. Checklists

### Today (before the competition)
- [ ] Tools installed; site runs in Live Server
- [ ] Groq key created; AI answers locally with a source line
- [ ] Repo created, secret scanning on, first push done, `.env` not in `git ls-files`
- [ ] Render deploy works; tested on your phone; abuse test passes
- [ ] Free NASA key obtained and added on Render
- [ ] Read `docs/NASA_DATA.md`, `docs/SUBMISSION.md`, `docs/SECURITY.md`

### Competition day, in order
1. Read the challenge and data; fill the 6W+1H in `docs/SUBMISSION.md`.
2. Edit only `config.js`: `SOURCE_URL` and the field mapping in `adapt()`. Copy the data file into `data/` (strict mode needs it there).
3. Check every fact against NASA pages; set `source` for each.
4. Add pictures and surface maps (checklist below), tune `nasaQuery`.
5. Test locally, push, let Render redeploy, test on the live link and your phone.
6. **Freeze the code.** Record a 2-minute demo video, finish the paper, add the live link, backup link and video link to the top of the README.
7. Submit before the deadline.

### Pictures
- [ ] Cover image per mission: 16:10, at least 1600×1000, JPG under 400 KB → `data/img/<id>.jpg`, set `image`. Credits written in `docs/CREDITS.md`
- [ ] Mars and Moon colour maps, 2:1, 2048×1024 or larger, JPG under 2 MB → `data/mars.jpg`, `data/moon.jpg`, set `PLANET_TEXTURES`; optional height maps `PLANET_BUMPS`
- [ ] Alignment check: click Gale Crater (Mars) or Mare Tranquillitatis (Moon); if the map is rotated by half, set `TEXTURE_LEFT_EDGE` to `0`
- [ ] Social preview image 1200×630
- [ ] 5 screenshots: title screen, planet info card, mission page, chat with source, phone view
- [ ] Phone screenshot of the installed app; demo video thumbnail 1280×720; team photo (optional)
- [ ] Rules: keep credits, no NASA logo, no implied NASA endorsement

### Security quick list
- [ ] Keys only in `server/.env` and Render's Environment tab
- [ ] `python scripts/check-secrets.py` says OK before every push
- [ ] Secret scanning, push protection, Dependabot alerts on
- [ ] Abuse test passes on the live link; hand-test injection prompts (see `docs/SECURITY.md`)
- [ ] Keys deleted and Render service paused after the event

## 8. Troubleshooting
| Problem | Fix |
|---|---|
| "Could not load the data source" | Run through Live Server or `run.bat`, don't double-click `index.html` |
| `python` not recognized | Reinstall Python with "Add Python to PATH" ticked, restart VS Code |
| PowerShell blocks activate | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, answer Y |
| `uvicorn` not recognized | Run the activate line again, or just use `run.bat` |
| Chat repeats facts instead of answering | AI call failing: check key in `.env`/Render, credit and rate limit, and the "LLM error" line; set `LLM_MODEL` if the default model was retired |
| Chat gives empty/fallback replies on the live site only | Strict mode: the data must be in `data/*.json`, or set `STRICT_FACTS=0` |
| NASA pictures missing | Check internet, set your own `NASA_API_KEY` on Render, adjust `nasaQuery`, or use your own `image` files |
| Map looks rotated by half | Set `TEXTURE_LEFT_EDGE` to `0` for that planet |
| Live site slow on first visit | Free server was asleep: open it 10 minutes before judging |

## 9. Limits to know
- Sample mission and landmark facts were written from general knowledge and are not verified against pages. Verify them.
- Free tiers (Groq, Render, NASA DEMO_KEY) have rate limits and can change; the site falls back to built-in replies when the AI is unavailable.
- Generated Moon/Mars surfaces are illustrative. Use real NASA maps for scientific accuracy.
- Prompt-injection defenses reduce but do not eliminate risk; the AI has no tools, secrets or database.
