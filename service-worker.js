const CACHE_NAME = 'my-letter-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images-192.png',
  '/images-512.png',
  '/audios/ba.mp3',
  '/audios/bo.mp3',
  '/audios/bi.mp3',
  '/audios/ab.mp3',
  
  // add more assets like images, audio files, etc.
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
