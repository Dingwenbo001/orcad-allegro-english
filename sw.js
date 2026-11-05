const CACHE_NAME = "orcad-allegro-17-4-v1";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/screenshots/capture-menu-01.png", "./assets/screenshots/capture-menu-02.png", "./assets/screenshots/capture-menu-03.png", "./assets/screenshots/capture-menu-04.png", "./assets/screenshots/capture-menu-05.png", "./assets/screenshots/capture-menu-06.png", "./assets/screenshots/capture-menu-07.png", "./assets/screenshots/capture-menu-08.png", "./assets/screenshots/capture-menu-09.png", "./assets/screenshots/capture-menu-10.png", "./assets/screenshots/capture-menu-11.png", "./assets/screenshots/capture-menu-12.png", "./assets/screenshots/capture-menu-13.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html"));
  }));
});
