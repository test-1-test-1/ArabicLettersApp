const CACHE_NAME = 'arabic-letter-app-v1';
const urlsToCache = [
  '/ArabicLettersApp/',
  '/ArabicLettersApp/index.html',
  '/ArabicLettersApp/manifest.json',
  '/ArabicLettersApp/images/icon-192.png',
  '/ArabicLettersApp/images/icon-512.png',
  '/ArabicLettersApp/audios/ba.mp3',
  '/ArabicLettersApp/audios/bo.mp3',
  '/ArabicLettersApp/audios/bi.mp3',
  '/ArabicLettersApp/audios/ab.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
