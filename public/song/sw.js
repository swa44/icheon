const CACHE_NAME = "song-v3"; // 버전을 v3로 올림
const ASSETS_TO_CACHE = ["/song/manifest.json", "/song/assets/196x196.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // 새 서비스 워커가 즉시 활성화되도록 강제
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
});

self.addEventListener("activate", (event) => {
  // 이전 버전 캐시 삭제
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      }),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }),
  );
});

// --- Push Notification Logic ---

self.addEventListener("push", function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/song/assets/196x196.png",
      badge: "/song/assets/96x96.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
        url: data.url || "/song",
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === "/" && "focus" in client) return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow(event.notification.data.url);
    }),
  );
});
