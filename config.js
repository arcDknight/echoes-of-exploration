// ===== PLUG THE CHALLENGE SOURCE IN HERE (only file you need to edit) =====
window.ECHOES_CONFIG = {
  // 1) Point at the dataset once NASA releases it (URL or local path). JSON array or {items:[...]}.
  SOURCE_URL: "data/missions.json",

  // 2) AI backend (server/main.py serves it at /chat). If unreachable, the site falls back to built-in replies.
  CHAT_ENDPOINT: "/chat",

  // Landmark list for the 3D planet page, and optional real texture maps (equirectangular images, e.g. NASA/USGS).
  SITES_URL: "data/sites.json",
  PLANET_TEXTURES: { moon: "", mars: "" },   // e.g. "data/moon.jpg". Empty = generated surface.

  // NASA APIs. Images need no key. Mars rover photos use api.nasa.gov (get a free key at https://api.nasa.gov).
  NASA_PROXY: "/api/rover/",       // server route that holds your real NASA key (see docs/SECURITY.md); falls back to the direct call below
  NASA_API_KEY: "DEMO_KEY",       // public demo key only. Never put a real secret in this file.       // DEMO_KEY has tight limits; use your own free key before judging
  NASA_IMAGES: true,              // show "From NASA's image library" on mission pages
  NASA_AUTO_IMAGES: true,         // fill missing tile images from NASA's library (set false to use only your own `image` files)
  PLANET_BUMPS: { moon: "", mars: "" },            // optional height maps, same format as PLANET_TEXTURES
  TEXTURE_LEFT_EDGE: { moon: -180, mars: -180 },   // set to 0 if a map's left edge is 0°E (common for Mars maps)

  // 3) Map whatever fields the source uses onto the shape the app expects.
  adapt(raw) {
    const list = Array.isArray(raw) ? raw : (raw.items || raw.data || []);
    return list.map(r => ({
      id:        r.id,
      name:      r.name,
      body:      r.body,            // "moon" | "mars" | "deep"
      status:    r.status,          // "retired" | "active"
      years:     r.years,           // "2004–2018"
      lat:       r.lat,
      lon:       r.lon,
      summary:   r.summary,
      persona:   r.persona,         // short voice description, aimed at a 10-year-old
      lastWords: r.lastWords,
      facts:     r.facts || [],     // array of real, citable facts (the chat only draws from these)
      rover:     r.rover,           // "curiosity" | "opportunity" | "spirit": shows live rover photos
      nasaQuery: r.nasaQuery,       // search words for NASA's image library (defaults to the name)
      nasaQueries: r.nasaQueries,   // fallback searches for the mission photo, tried in order
      scenic:    r.scenic,          // searches for the aesthetic photo (Earthrise, sunsets, crescents), tried in order
      source:    r.source,          // string or {label,url}: credited under every AI answer
      image:     r.image,           // optional image URL or path
      badge:     r.badge
    }));
  }
};
