// Analisi Arciere - Service Worker v36
const CACHE_NAME = 'analisi-arciere-v36';

const APP_FILES = ['./', './index.html', './app.html', './manifest.json', './logo-pol.png'];

self.addEventListener('install', (event) => {
  console.log('[SW] Installing v36...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of APP_FILES) {
        try { await cache.add(url); } catch (e) { console.warn('[SW] Failed:', url); }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating v36...');
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => {
        if (name !== CACHE_NAME) {
          console.log('[SW] Deleting old:', name);
          return caches.delete(name);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  
  // Network First per HTML
  if (url.pathname.endsWith('.html') || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  
  // Cache First per il resto
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            if (url.href.includes('jsdelivr') || url.href.includes('mediapipe') || url.href.includes('googleapis')) {
              cache.put(event.request, clone);
            }
          });
        }
        return response;
      });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
