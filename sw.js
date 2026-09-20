// PulseGuard™ Signoff Portal Service Worker (Offline GitHub Pages Cache)
const CACHE_NAME = 'pulseguard-portal-v1.2.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './docs/01_cryptographic_audit.html',
  './docs/01_adrs.html',
  './docs/02_clinical_pilot_playbook.html',
  './docs/02_transmission_logic_guide.html',
  './docs/03_regulatory_compliance_dossier.html',
  './docs/03_patent_ip_roadmap.html',
  './docs/04_master_technical_architecture.html',
  './docs/04_mobile_client_state_machine.html',
  './docs/04_stateless_relay_guide.html',
  './docs/05_board_architectural_guide.html',
  './docs/05_executive_board_deck.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching all standalone dossiers and app assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[ServiceWorker] Purging outdated cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
