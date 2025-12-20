// Analisi Arciere - Service Worker v23
// Polisportiva Gonone Dorgali - Tiro con l'Arco

const CACHE_NAME = 'analisi-arciere-v23';

// File dell'app da cachare
const APP_FILES = [
  './',
  './index.html',
  './app.html',
  './manifest.json',
  './logo-pol.png',
  './v11.html',
  './v12.html',
  './v13.html',
  './v14.html',
  './v15.html',
  './v16.html',
  './v17.html',
  './v18.html',
  './v19.html',
  './v20.html',
  './v21.html',
  './v22.html',
  './v23.html'
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
  console.log('[SW] Installing v22...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('[SW] Caching app files...');
        
        // Cache app files
        for (const url of APP_FILES) {
          try {
            await cache.add(url);
            console.log('[SW] Cached:', url);
          } catch (err) {
            console.warn('[SW] Could not cache:', url);
          }
        }
        
        // Cache external libs
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
        console.log('[SW] Activated, claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch - Cache First strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip API calls to local server
  if (url.pathname.startsWith('/api/') || url.hostname === '192.168.1.100') {
    return;
  }
  
  // Skip chrome-extension and other non-http
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache bad responses
            if (!response || response.status !== 200) {
              return response;
            }
            
            // Clone and cache dynamically loaded resources
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                // Cache TensorFlow model files
                if (url.href.includes('tfhub.dev') || 
                    url.href.includes('kaggle') ||
                    url.href.includes('storage.googleapis.com') ||
                    url.href.includes('jsdelivr.net') ||
                    url.href.includes('mediapipe')) {
                  cache.put(event.request, responseToCache);
                }
              });
            
            return response;
          })
          .catch((err) => {
            console.error('[SW] Fetch failed:', url.href);
            
            // Offline fallback for HTML pages
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('./app.html');
            }
          });
      })
  );
});

// Listen for messages
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
