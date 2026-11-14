// Network-first service worker: always fresh when online, works offline after the first visit.
const V="echoes-v4",SHELL=["./","index.html","planet.html","config.js","data/missions.json","data/sites.json"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request;const u=new URL(r.url);
 // NASA pictures are NOT handled here: a worker fetch() would be blocked by the server's connect-src policy. The browser caches them on its own.
 if(r.method!=="GET"||u.pathname.endsWith("/chat")||(u.origin!==location.origin&&u.hostname!=="cdnjs.cloudflare.com"))return;
 e.respondWith(fetch(r).then(res=>{if(res.status===200||res.type==="opaque"){const c=res.clone();caches.open(V).then(x=>x.put(r,c)).catch(()=>{})}return res})
  .catch(()=>caches.match(r).then(m=>m||(r.mode==="navigate"?caches.match("index.html"):Response.error()))))});
