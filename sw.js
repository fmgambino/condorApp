const CACHE_NAME = 'condorapp-v1';
const ASSETS = ['./', './index.html', './css/styles.css', './js/app.js', './assets/logo-condor.svg', './assets/favicon.svg', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
