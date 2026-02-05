const CACHE_NAME = "song-v1";
const ASSETS_TO_CACHE = [
  "/song/",
  "/song/index.html",
  "/song/style.css",
  "/song/nav-guide.js",
  "/song/video-delay.js",
  "/song/manifest.json",
  "/song/assets/196x196.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
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
      badge: "/song/assets/96x96.png", // Android 상단 바 아이콘 등
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
        url: data.url || "/song", // 클릭 시 이동할 URL
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        // 이미 열린 창이 있으면 포커스
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        // 없으면 새 창 열기 (알림 데이터에 담긴 URL로)
        if (clients.openWindow)
          return clients.openWindow(event.notification.data.url);
      }),
  );
});
