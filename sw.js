// ============================================================
//  SmartCare – Service Worker
//  Strategy: cache-first for media/fonts, stale-while-revalidate
//  for app-shell assets, network-first for /api/
// ============================================================

const CACHE_VERSION = 'smartcare-v3.2';           // v3.2: Performance — stale-while-revalidate for app-shell assets, update toast, algorithms cache-first, faster network-first timeout
const CACHE_TIMEOUT = 2500;

// ── Files cached immediately on install ─────────────────────
const PRE_CACHE = [
  './',
  'index.html',
  'pages/login.html',
  'pages/admin.html',
  'pages/about.html',
  'pages/signup.html',
  'pages/privacy.html',
  'pages/terms.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icons/icon.png',
  'icons/sprite.svg',
  'images/image-01.png',
  'chapters/c-index.html',
  'chapters/c0.html',
  'chapters/c1.html',
  'chapters/c2.html',
  'chapters/c3.html',
  'chapters/c4.html',
  'chapters/c5.html',
  'chapters/c6.html',
  'chapters/c7.html',
  'chapters/c8.html',
  'chapters/c9.html',
  'chapters/c10.html',
  'chapters/m1-38.html',
  'content/c-index.js',
  'content/c0.js',
  'content/c1.meta.js',
  'content/c2.meta.js',
  'content/c3.meta.js',
  'content/c4.meta.js',
  'content/c5.meta.js',
  'content/c6.meta.js',
  'content/c7.meta.js',
  'content/c8.meta.js',
  'content/c9.meta.js',
  'content/c10.meta.js',
  'content/m1-38.js',
  // First section of each split chapter, so the default view (no ?section=)
  // still works instantly offline before any tab has been visited.
  'content/c1/c1s1.json',
  'content/c2/c2s1.json',
  'content/c3/c3s1.json',
  'content/c4/c4s1.json',
  'content/c5/c5s1.json',
  'content/c6/c6s1.json',
  'content/c7/c7s1.json',
  'content/c8/c8s1.json',
  'content/c9/c9s1.json',
  'content/c10/c10s1.json',
  'pages/drug-calculator.js',
  'pages/drug-data.json',
  'pages/ecg.html',
  'pages/ECG-study.html',
  'pages/ecg-engine.js',
  'pages/aha.html',
  'pages/courses.html',
  'pages/prometric-planner.html',
  'pages/supabase-config.js',
  'pages/supabase-client.js',
  'courses/itls/index.html',
  'courses/itls/data/bundle.js',
  'fonts/fonts.css',
  'fonts/inter-var.woff2',
  'fonts/dm-mono-400.woff2',
  'fonts/dm-mono-500.woff2'
];

// ── File type routing ────────────────────────────────────────
const CACHE_FIRST_PATTERNS = [
  /\/icons\//,
  /\/images\//,
  /\/algorithms\//,
  /\/fonts\//,
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /cdnjs\.cloudflare\.com/,
];

// ── Same-origin app-shell assets served stale-while-revalidate ──
const SWR_PATTERN = /\.(?:js|css|html|json|svg)(?:\?|$)/;

// ============================================================
//  INSTALL  
// ============================================================
self.addEventListener('install', function(event) {
  console.log('[SW] Installing v' + CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return Promise.allSettled(
        PRE_CACHE.map(function(url) {
          return fetch(url, { credentials: 'same-origin' })
            .then(function(response) {
              if (response.ok) return cache.put(url, response);
            })
            .catch(function(err) {
              console.warn('[SW] Pre-cache failed for:', url, err.message);
            });
        })
      );
    }).then(function() {
      console.log('[SW] Pre-cache complete. Waiting for activation signal.');
    })
  );
});

// ============================================================
//  ACTIVATE 
// ============================================================
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating v' + CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_VERSION;   
        }).map(function(key) {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim(); 
    })
  );
});

// ============================================================
//  FETCH  
// ============================================================
self.addEventListener('fetch', function(event) {
  const req = event.request;

  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  const url = new URL(req.url);
  const isCrossOrigin = url.origin !== self.location.origin;
  if (isCrossOrigin && !isCacheable(req.url)) return;

  if (CACHE_FIRST_PATTERNS.some(function(p) { return p.test(req.url); })) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // API calls always need fresh data — network-first with a short timeout.
  if (req.url.includes('/api/')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Same-origin app-shell assets: serve from cache instantly, refresh in background.
  if (!isCrossOrigin && (SWR_PATTERN.test(req.url) || req.mode === 'navigate')) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  event.respondWith(networkFirst(req));
});

// ============================================================
//  STRATEGY: Network First
// ============================================================
function networkFirst(req) {
  return Promise.race([
    fetch(req.clone()),
    new Promise(function(_, reject) {
      setTimeout(function() { reject(new Error('timeout')); }, CACHE_TIMEOUT);
    })
  ]).then(function(networkResponse) {
    if (networkResponse && networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      caches.open(CACHE_VERSION).then(function(cache) {
        cache.put(req, responseToCache);
      });
    }
    return networkResponse;
  }).catch(function() {
    return offlineFallback(req);
  });
}

// ============================================================
//  STRATEGY: Stale While Revalidate
// ============================================================
function staleWhileRevalidate(req) {
  return caches.open(CACHE_VERSION).then(function(cache) {
    return cache.match(req, { ignoreSearch: true }).then(function(cached) {
      var fetchReq;
      try {
        fetchReq = req.clone();
      } catch (e) {
        return cached || networkFirst(req);
      }

      var networkUpdate = fetch(fetchReq).then(function(response) {
        if (response && response.ok) {
          try {
            cache.put(req, response.clone());
          } catch (e) {}
        }
        return response;
      }).catch(function() {
        return null;
      });

      if (cached) {
        console.log('[SW] Stale-while-revalidate serving cached:', req.url);
        return cached;
      }

      // Nothing cached yet — wait for the network, then fall back to the offline UX.
      return networkUpdate.then(function(response) {
        return response || offlineFallback(req);
      });
    });
  }).catch(function() {
    return fetch(req).catch(function() { return offlineFallback(req); });
  });
}

// ============================================================
//  OFFLINE FALLBACK
// ============================================================
function offlineFallback(req) {
  // FIX: ignoreSearch ensures styles.css matches even if the browser adds hidden parameters
  return caches.match(req, { ignoreSearch: true }).then(function(cached) {
    if (cached) {
      console.log('[SW] Offline fallback for:', req.url);
      return cached;
    }

    if (req.url.includes('/api/')) {
        return new Response(JSON.stringify({ error: 'Server offline or unreachable.' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // FIX: Only return the HTML error page if the browser is explicitly asking for a webpage.
    // `accept` can be null (some fetches / browser extensions don't set it) — guard it so
    // this branch doesn't throw and take down the whole offline fallback.
    const acceptHeader = req.headers.get('accept') || '';
    if (acceptHeader.includes('text/html') || req.mode === 'navigate') {
        return caches.match('index.html', { ignoreSearch: true }).then(function(fallback) {
          return fallback || new Response(
            '<h2 style="font-family:sans-serif;text-align:center;margin-top:40px">' +
            '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="icons/sprite.svg#phone-off"/></svg> You are offline and this page is not cached yet.</h2>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        });
    }

    // If a CSS or JS file is missing offline, silently fail instead of poisoning the DOM
    return new Response('', { status: 404, statusText: 'Offline' });
  });
}

// ============================================================
//  STRATEGY: Cache First
// ============================================================
function cacheFirst(req) {
  // Never cache non-GET or non-http requests
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return fetch(req);
  }
  return caches.match(req, { ignoreSearch: true }).then(function(cached) {
    // Clone the request only if its body is still usable
    var fetchReq;
    try {
      fetchReq = req.clone();
    } catch (e) {
      // Body already consumed — just fetch without caching
      return cached || fetch(req);
    }

    var networkUpdate = fetch(fetchReq).then(function(response) {
      if (response && response.ok && response.clone) {
        try {
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(req, copy);
          });
        } catch (e) {
          // Clone failed — cache skipped, response still returned
        }
      }
      return response;
    }).catch(function() {
      // Offline or CSP-blocked — ignore, cached response will be used
      return null;
    });

    return cached || networkUpdate;
  }).catch(function() {
    // cache.match itself failed — fall back to network
    return fetch(req);
  });
}

// ============================================================
//  HELPER
// ============================================================
function isCacheable(url) {
  return CACHE_FIRST_PATTERNS.some(function(p) { return p.test(url); });
}

// ============================================================
//  MESSAGE HANDLER
// ============================================================
self.addEventListener('message', function(event) {
  if (!event.data) return;

  switch (event.data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'CACHE_URLS':
      if (Array.isArray(event.data.urls)) {
        caches.open(CACHE_VERSION).then(function(cache) {
          return Promise.allSettled(
            event.data.urls.map(function(url) {
              return fetch(url, { credentials: 'same-origin' })
                .then(function(r) { if (r.ok) return cache.put(url, r); })
                .catch(function() {});
            })
          );
        }).then(function() {
          if (event.source) {
            event.source.postMessage({ type: 'CACHE_COMPLETE' });
          }
        });
      }
      break;

    case 'CLEAR_CACHE':
      caches.keys().then(function(keys) {
        return Promise.all(keys.map(function(k) { return caches.delete(k); }));
      }).then(function() {
        if (event.source) {
          event.source.postMessage({ type: 'CACHE_CLEARED' });
        }
      });
      break;
  }
});