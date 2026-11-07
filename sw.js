const CACHE = 'carbon-pocket-v1.4.0-ios-icon-20261107b';
const STATIC = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(STATIC)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('carbon-pocket-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => {
      if(res.ok) { const copy=res.clone(); caches.open(CACHE).then(c => c.put(req,copy)); }
      return res;
    }).catch(async () => (await caches.match(req)) || (await caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if(res.ok) { const copy=res.clone(); caches.open(CACHE).then(c => c.put(req,copy)); }
    return res;
  })));
});
