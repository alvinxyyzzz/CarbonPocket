const CACHE = 'carbon-pocket-v1.3.0-iconfix-20261107';
const STATIC = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest?v=20261107', './icons/icon-192.png?v=20261107', './icons/icon-512.png', './icons/icon-180.png?v=20261107'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', e => {e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('carbon-pocket-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch', e => {
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{if(resp.ok){let clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}return resp;})));
});
