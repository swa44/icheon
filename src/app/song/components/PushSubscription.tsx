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
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // 1. iOS 판별
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // 2. 안드로이드 설치 프롬프트 캡처
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // 3. 서비스 워커 등록 확인
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);
        reg.pushManager.getSubscription().then((sub) => {
          if (sub) setIsSubscribed(true);
        });
      });
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleClick = async () => {
    // A. 이미 알림 구독 중이면 -> 해제 로직
    if (isSubscribed) {
      unsubscribeFromPush();
      return;
    }

    // B. 앱(Standalone) 모드인지 확인
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone;

    // C. 웹 브라우저 상태라면 -> 설치 유도
    if (!isStandalone) {
      if (isIOS) {
        // 아이폰 -> 설명서 모달 표시
        setShowIOSGuide(true);
      } else if (deferredPrompt) {
        // 안드로이드 -> 설치 팝업 실행
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          setDeferredPrompt(null);
        }
      } else {
        // 안드로이드인데 설치 프롬프트가 없을 때 (이미 설치됨, 혹은 준비 안됨)
        alert(
          "앱 설치 팝업이 뜨지 않는다면,\n브라우저 우측 상단 메뉴(⋮)에서 [앱 설치] 또는 [홈 화면에 추가]를 직접 눌러주세요.",
        );
      }
      return;
    }

    // D. 앱 상태이거나 개발모드 -> 바로 알림 신청
    subscribeToPush();
  };

  const subscribeToPush = async () => {
    if (!registration) return;

    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });

      await fetch("/api/web-push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });

      setIsSubscribed(true);
      alert("알림 설정이 완료되었습니다! 새로운 소식을 알려드립니다.");
    } catch (error) {
      console.error("Failed to subscribe:", error);
      alert("알림 설정 실패. 설정 > 알림 권한을 확인해주세요.");
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
    }
  };

  return (
    <>
      {/* 메인 버튼 */}
      <div>
        {!isSubscribed ? (
          <button
            onClick={handleClick}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1.5 px-3 text-xs rounded-full shadow-sm flex items-center gap-1.5 transition-all text-nowrap"
          >
            <i className="fas fa-bell text-[#e61e2b]"></i>
            <span>알림 받기</span>
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-1.5 px-3 text-xs rounded-full flex items-center gap-1.5 transition-all text-nowrap"
          >
            <i className="fas fa-check"></i>
            <span>알림 ON</span>
          </button>
        )}
      </div>

      {/* 아이폰 설치 안내 모달 */}
      {showIOSGuide && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setShowIOSGuide(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-3 right-4 text-gray-400 text-xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              아이폰 앱 설치 방법
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              알림을 받으시려면 <br />홈 화면에 추가해야 합니다.
            </p>
            <div className="space-y-3 text-left bg-gray-50 p-4 rounded-xl text-sm text-gray-800">
              <div className="flex items-center gap-3">
                <span className="bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  1
                </span>
                <span>
                  하단의 <i className="fas fa-share-square text-blue-500"></i>{" "}
                  <strong>공유 버튼</strong>을 누르세요.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  2
                </span>
                <span>
                  메뉴에서 <strong>'홈 화면에 추가'</strong>를 찾아 누르세요.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  3
                </span>
                <span>
                  상단의 <strong>'추가'</strong>를 누르면 끝!
                </span>
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full bg-[#1b1b1b] text-white py-3 rounded-xl font-bold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
