"use client";

import { useState, useEffect } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // iOS 여부 확인
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // 안드로이드/크롬 설치 프롬프트 캡처
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // 이미 설치되어 있지 않은 경우에만 배너 표시
      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    // iOS는 항상 안내 가능성이 있으므로 특정 조건(미설치 상태)에서 표시
    if (
      isIOSDevice &&
      !window.matchMedia("(display-mode: standalone)").matches
    ) {
      setShowInstallBanner(true);
    }

    // 개발 환경에서는 테스트를 위해 항상 표시
    if (process.env.NODE_ENV === "development") {
      setShowInstallBanner(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert(
        "아이폰은 [하단 공유 버튼] -> [홈 화면에 추가]를 순서대로 눌러주세요!",
      );
      return;
    }

    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  if (!showInstallBanner) return null;

  return (
    <div className="pwa-install-banner">
      <div className="content">
        <i className="fas fa-mobile-alt px-2"></i>
        <span>어플로 사용하면 더 편리합니다!</span>
      </div>
      <button onClick={handleInstallClick} className="install-btn">
        {isIOS ? "설치방법" : "앱 설치"}
      </button>
      <button onClick={() => setShowInstallBanner(false)} className="close-btn">
        <i className="fas fa-times"></i>
      </button>

      <style jsx>{`
        .pwa-install-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 12px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 9999;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          animation: slideUp 0.5s ease-out;
        }
        .content {
          display: flex;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .install-btn {
          background: #e61e2b;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          margin-left: 10px;
        }
        .close-btn {
          background: none;
          border: none;
          color: #aaa;
          margin-left: 10px;
          cursor: pointer;
        }
        @keyframes slideUp {
          from {
            bottom: -100px;
            opacity: 0;
          }
          to {
            bottom: 20px;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
