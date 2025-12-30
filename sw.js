// Analisi Arciere - Service Worker v35
// Polisportiva Gonone Dorgali - Tiro con l'Arco

const CACHE_NAME = 'analisi-arciere-v35';

// File dell'app da cachare
const APP_FILES = [
  './',
  './index.html',
  './app.html',
  './manifest.json',
  './logo-pol.png'
];

// Librerie esterne da cachare
const EXTERNAL_LIBS = [
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet',
  'https://cdn.jsdelivr.net/npm/@mediapipe/holistic',
  'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils',
  'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap'
];

// Install - cache tutti i file
self.addEventListener('install', (event) => {
  console.log('[SW] Installing v35...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('[SW] Caching app files...');
        
        for (const url of APP_FILES) {
          try {
            await cache.add(url);
            console.log('[SW] Cached:', url);
          } catch (err) {
            console.warn('[SW] Could not cache:', url);
          }
        }
        
        for (const url of EXTERNAL_LIBS) {
          try {
            const response = await fetch(url, { mode: 'cors' });
            if (response.ok) {
              await cache.put(url, response);
              console.log('[SW] Cached external:', url);
            }
          } catch (err) {
            console.warn('[SW] Could not cache external:', url);
          }
        }
        
        console.log('[SW] Install complete');
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - pulisce vecchie cache
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating v35...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activated, claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch - Network First per HTML, Cache First per il resto
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  if (event.request.method !== 'GET') return;
  if (url.pathname.startsWith('/api/')) return;
  if (!url.protocol.startsWith('http')) return;
  
  // Network First per HTML
  if (event.request.headers.get('accept')?.includes('text/html') ||
      url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // Cache First per il resto
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) return response;
            
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              if (url.href.includes('tfhub.dev') || 
                  url.href.includes('storage.googleapis.com') ||
                  url.href.includes('jsdelivr.net') ||
                  url.href.includes('mediapipe')) {
                cache.put(event.request, responseToCache);
              }
            });
            
            return response;
          });
      })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
