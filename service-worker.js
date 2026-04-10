const CACHE = 'fish-feeding-v1';
const FILES = [
  '/fish-feeding/',
  '/fish-feeding/index.html',
  '/fish-feeding/manifest.json',
  '/fish-feeding/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
