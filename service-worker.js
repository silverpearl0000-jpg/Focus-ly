self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('focusly-cache').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/script.js',
      '/sounds/Alaram.wav'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
