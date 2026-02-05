"use client";

import { useEffect, useState } from "react";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushSubscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // 서비스 워커 등록 확인
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);
        reg.pushManager.getSubscription().then((sub) => {
          if (sub) setIsSubscribed(true);
        });
      });
    }
  }, []);

  const subscribeToPush = async () => {
    if (!registration) return;

    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });

      // 서버에 구독 정보 전송
      await fetch("/api/web-push/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sub),
      });

      setIsSubscribed(true);
      alert("알림 설정이 완료되었습니다! 새로운 소식이 오면 알려드릴게요.");
    } catch (error) {
      console.error("Failed to subscribe:", error);
      alert("알림 설정에 실패했습니다. 브라우저 설정에서 알림을 허용해주세요.");
    }
  };

  return (
    <div>
      {!isSubscribed ? (
        <button
          onClick={subscribeToPush}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1.5 px-3 text-xs rounded-full shadow-sm flex items-center gap-1.5 transition-all"
        >
          <i className="fas fa-bell text-[#e61e2b]"></i>
          <span>알림 받기</span>
        </button>
      ) : (
        <button
          className="bg-gray-50 text-gray-400 font-medium py-1.5 px-3 text-xs rounded-full cursor-default flex items-center gap-1.5"
          disabled
        >
          <i className="fas fa-check text-green-500"></i>
          <span>알림 ON</span>
        </button>
      )}
    </div>
  );
}
