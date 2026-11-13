# Using NASA data and APIs (for accuracy and credit)

## Already wired in (no code needed)
| What | Where it shows | Key needed? | Config |
|---|---|---|---|
| **NASA Image and Video Library** (`images-api.nasa.gov`) | Mission tiles (if you give no `image`) and "From NASA's image library" on each mission page, with credit and a link to the original | No | `NASA_IMAGES`, `NASA_AUTO_IMAGES`, per-mission `nasaQuery` |
| **Mars Rover Photos** (`api.nasa.gov/mars-photos`) | "Latest photos from <rover>" on missions that have a `rover` field | Yes (free) | `NASA_API_KEY`, per-mission `rover` |

Steps:
1. Get a free key at https://api.nasa.gov (instant, by email). Put it in `config.js` as `NASA_API_KEY`. `DEMO_KEY` works for testing but has very low limits, so don't rely on it at judging time.
2. Tune `nasaQuery` in `data/missions.json` until the first results are the right pictures. Check them in the browser. To pin an exact picture, set `image` to your own file instead.
3. If a NASA call fails (offline, rate limit, API change) the page simply hides that section. Nothing breaks.
Note: I could not test live NASA calls from the build environment, so open a mission page once with internet on.

## data.nasa.gov (the open-data catalog)
It lists NASA datasets. If your challenge dataset lives there, open the dataset page, find its API or JSON/CSV export link, and:
1. Set `SOURCE_URL` in `config.js` to that JSON link (or download it into `data/` and point to the file).
2. Map its columns in `adapt()` to: `id, name, body, status, years, lat, lon, summary, facts, source`.
3. If the browser blocks the request (CORS), download the file into `data/` instead.
Dataset locations change, so confirm the current link on the page itself.

## Other free NASA sources worth citing
- **NASA Trek (Moon Trek, Mars Trek)**: map layers and downloadable surface maps for the 3D planet.
- **NASA SVS "CGI Moon Kit"**: ready-to-use Moon colour and elevation maps.
- **Planetary Data System (pds.nasa.gov)**: official mission datasets.
- **NSSDCA Master Catalog**: spacecraft launch dates, mission descriptions.
- **JPL Horizons / SSD APIs**: live positions and distances (for example how far Voyager 1 is today).
- **APOD (api.nasa.gov)**: Astronomy Picture of the Day.

## Making facts more accurate
- Every fact in `data/missions.json` should come from one of the sources above. Put the page title in `source` (or `{label, url}` for a link). The chat shows that source under each answer.
- Prefer numbers with units and dates. Remove any fact you cannot confirm.
- List every source you used in the README and paper. That supports the "free NASA resources" standard.

## Credit and rules
NASA media is generally free to use, but check each image's credit line. Some images come from partners and carry other terms. Do not use the NASA logo, and do not suggest NASA endorses the project. The site already shows "Not an endorsement by NASA" under NASA images.
