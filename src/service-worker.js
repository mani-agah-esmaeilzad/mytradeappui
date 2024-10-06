self.addEventListener('install', function(event) {
    // Pre-cache resources
    event.waitUntil(
      caches.open('my-pwa-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',

        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  