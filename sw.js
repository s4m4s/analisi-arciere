// Analisi Arciere - Service Worker
const CACHE_NAME = 'analisi-arciere-v20.1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-pol.png',
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix',
  'https://cdn.jsdelivr.net/npm/@mediapipe/holistic',
  'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils',
  'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap'
];

// Install - cache assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Install complete');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Cache failed:', err);
      })
  );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
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
        console.log('[SW] Activate complete');
        return self.clients.claim();
      })
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip server API calls (let them go to network)
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }
        
        // Fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Cache the new resource
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Offline fallback
            console.log('[SW] Fetch failed, serving offline');
          });
      })
  );
});

// Listen for messages from the app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
