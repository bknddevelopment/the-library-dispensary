/**
 * Service Worker for The Library of New Jersey
 * Implements offline caching and performance optimizations
 */

const CACHE_NAME = 'library-dispensary-v1';
const DYNAMIC_CACHE = 'library-dynamic-v1';

// Critical assets to cache for offline access
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.png',
  '/the-library-logo.png',
  // Fonts
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap',
];

// Cache strategy configurations
const CACHE_STRATEGIES = {
  // Network first for HTML pages (always fresh content)
  networkFirst: [
    '/',
    '/products/',
    '/location/',
    '/about/',
    '/services/',
    '/education/',
    '/first-visit/',
  ],
  // Cache first for static assets
  cacheFirst: [
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
    /\.(?:woff|woff2|ttf|otf)$/,
    /\.(?:js|css)$/,
    /fonts\.googleapis\.com/,
    /fonts\.gstatic\.com/,
  ],
  // Stale while revalidate for API calls
  staleWhileRevalidate: [
    /api\//,
    /\.json$/,
  ]
};

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('[Service Worker] Failed to cache static assets:', error);
      })
  );

  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== DYNAMIC_CACHE)
          .map((name) => {
            console.log('[Service Worker] Removing old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );

  // Take control immediately
  self.clients.claim();
});

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) protocols
  if (!request.url.startsWith('http')) {
    return;
  }

  // Determine cache strategy
  let strategy = 'networkFirst'; // Default strategy

  // Check if URL matches network-first patterns
  if (CACHE_STRATEGIES.networkFirst.some(pattern => {
    if (typeof pattern === 'string') {
      return url.pathname === pattern || url.pathname.startsWith(pattern);
    }
    return pattern.test(url.pathname);
  })) {
    strategy = 'networkFirst';
  }
  // Check if URL matches cache-first patterns
  else if (CACHE_STRATEGIES.cacheFirst.some(pattern => {
    if (pattern instanceof RegExp) {
      return pattern.test(url.pathname) || pattern.test(url.hostname);
    }
    return false;
  })) {
    strategy = 'cacheFirst';
  }
  // Check if URL matches stale-while-revalidate patterns
  else if (CACHE_STRATEGIES.staleWhileRevalidate.some(pattern => {
    if (pattern instanceof RegExp) {
      return pattern.test(url.pathname);
    }
    return false;
  })) {
    strategy = 'staleWhileRevalidate';
  }

  // Apply the appropriate strategy
  if (strategy === 'networkFirst') {
    event.respondWith(networkFirst(request));
  } else if (strategy === 'cacheFirst') {
    event.respondWith(cacheFirst(request));
  } else if (strategy === 'staleWhileRevalidate') {
    event.respondWith(staleWhileRevalidate(request));
  } else {
    event.respondWith(fetch(request));
  }
});

// Network First strategy - for HTML pages
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // Fallback to cache if network fails
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page if available
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match('/');
      if (offlinePage) {
        return offlinePage;
      }
    }

    throw error;
  }
}

// Cache First strategy - for static assets
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // Return placeholder for images
    if (request.destination === 'image') {
      return new Response('', {
        headers: { 'Content-Type': 'image/svg+xml' },
        status: 200,
      });
    }

    throw error;
  }
}

// Stale While Revalidate strategy - for API calls
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);

  // Return cached response immediately if available
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, networkResponse);
        });
      }
    }).catch(() => {
      // Silent fail for background update
    });

    return cachedResponse;
  }

  // No cache, fetch from network
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
    event.ports[0].postMessage({ cleared: true });
  }
});