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
    // 앱으로 실행 중인지 확인 (PWA 모드 여부)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone;

    // 모바일 기기이면서 설치되지 않은 경우 안내 (개발 모드는 제외)
    if (!isStandalone && process.env.NODE_ENV !== "development") {
      alert(
        "알림을 받으시려면 앱 설치가 필요합니다.\n하단의 [앱 설치] 버튼을 눌러 홈 화면에 추가한 뒤 다시 시도해 주세요.",
      );
      return;
    }

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

  const unsubscribeFromPush = async () => {
    if (!registration) return;

    if (!confirm("알림 수신을 해제하시겠습니까?")) return;

    try {
      const sub = await registration.pushManager.getSubscription();
      if (sub) {
        await sub.unsubscribe();
        setIsSubscribed(false);
        alert("알림 해제가 완료되었습니다.");
      }
    } catch (error) {
      console.error("Failed to unsubscribe:", error);
      alert("알림 해제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      {!isSubscribed ? (
        <button
          onClick={subscribeToPush}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1.5 px-3 text-xs rounded-full shadow-sm flex items-center gap-1.5 transition-all text-nowrap"
        >
          <i className="fas fa-bell text-[#e61e2b]"></i>
          <span>알림 받기</span>
        </button>
      ) : (
        <button
          onClick={unsubscribeFromPush}
          className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-1.5 px-3 text-xs rounded-full flex items-center gap-1.5 transition-all text-nowrap"
        >
          <i className="fas fa-check"></i>
          <span>알림 ON</span>
        </button>
      )}
    </div>
  );
}
