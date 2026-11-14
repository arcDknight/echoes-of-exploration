# Sources used in this project

## 1. Software
| Source | Used for | License (check before redistributing) |
|---|---|---|
| three.js r128 (loaded from cdnjs) | 3D planet | MIT |
| FastAPI, Uvicorn, Pydantic | Backend server and validation | MIT / BSD / MIT |
| LangChain (`langchain-core`, `langchain-openai`) | Prompting and structured output | MIT |
| httpx, python-dotenv | NASA proxy calls, reading `.env` | BSD |
| Inter Tight (Google Fonts) | Typeface | SIL Open Font License |
| Pillow | One-time generation of the app icons (not shipped) | HPND |
| Mermaid (rendered by GitHub) | README diagram | MIT |

## 2. Services
Groq (default AI, model `openai/gpt-oss-120b`), Google Gemini and OpenAI (optional alternatives), Render (hosting), GitHub and GitHub Pages (code and static hosting).

## 3. NASA data used live
- **NASA Image and Video Library**, `images-api.nasa.gov`: mission-page pictures, captions, credit lines.
- **NASA Mars Rover Photos API**, `api.nasa.gov/mars-photos`: latest rover photos (through the server proxy when available).
Mentioned as next steps but **not used yet**: data.nasa.gov datasets, NASA Trek and SVS surface maps, Planetary Data System, JPL Horizons, APOD (see `docs/NASA_DATA.md`).

## 4. Content in the sample data (needs checking)
Facts in `data/missions.json` and landmarks in `data/sites.json` were **written from general knowledge of public NASA material, then matched to the NASA Space Apps challenge resource list** (NSSDCA and science.nasa.gov pages). Facts were not copied word for word, so verify each against its page before presenting. Two links (Phoenix, Pioneer 11) were not in the challenge list and are marked "confirm link".

| Item | Source label in the data | Where to verify |
|---|---|---|
| Apollo 11 Eagle | NASA NSSDCA: Apollo 11 Lunar Module (1969-059C) | https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C |
| Lunar Roving Vehicles | NASA NSSDCA: Lunar Roving Vehicle (1971-063C) | https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C |
| ALSEP Science Stations | NASA NSSDCA: Apollo 12 ALSEP (1969-099C) | https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C |
| Surveyor 3 | NASA Science: Surveyor 3 | https://science.nasa.gov/mission/surveyor-3/ |
| Sojourner | NASA Science: Mars Pathfinder | https://science.nasa.gov/mission/mars-pathfinder/ |
| Spirit | NASA Science: Spirit and Opportunity (Mars Exploration Rovers) | https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/ |
| Opportunity | NASA Science: Spirit and Opportunity (Mars Exploration Rovers) | https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/ |
| Viking 1 Lander | NASA Science: Viking 1 | https://science.nasa.gov/mission/viking-1/ |
| Viking 2 Lander | NASA Science: Viking 1 and 2 | https://science.nasa.gov/mission/viking-1/ |
| Phoenix | NASA Science: Phoenix Mars Lander (page not in the challenge list, confirm link) | https://science.nasa.gov/mission/phoenix/ |
| InSight | NASA Science: InSight | https://science.nasa.gov/mission/insight/ |
| Ingenuity | NASA Science: Ingenuity Mars Helicopter | https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/ |
| Dawn | NASA Science: Dawn | https://science.nasa.gov/mission/dawn/ |
| NEAR Shoemaker | NASA Science: NEAR Shoemaker | https://science.nasa.gov/mission/near-shoemaker/ |
| Pioneer 10 | NASA Science: Pioneer 10 | https://science.nasa.gov/mission/pioneer-10/ |
| Pioneer 11 | NASA Science: Pioneer 10 and 11 (Pioneer 11 page not in the challenge list, confirm link) | https://science.nasa.gov/mission/pioneer-10/ |
| Kepler Space Telescope | NASA Science: Kepler | https://science.nasa.gov/mission/kepler/ |

The generated Moon and Mars surfaces place real named features (maria, basins, volcanoes) by approximate coordinates. They are illustrative, not a data product.

## 5. Design and planning inputs
- Layout and style inspiration: mshaffuan.com (structure read from the live page and from your screenshots; no code, text or images copied).
- Surface look reference: the NASA Eyes-style Mars screenshots you supplied (no assets used).
- Hackathon material you supplied: the judging rubric (10 standards), the 6W+1H and 30-second pitch formats, and the "Echoes of Exploration" concept outline.

## 6. Credit lines to paste into the README and paper
- "Mission imagery and captions: NASA and partners, via the NASA Image and Video Library and api.nasa.gov. Credit shown per image. This project is not endorsed by NASA."
- "3D rendering with three.js. AI replies generated with a free language model and grounded in the listed mission facts."
