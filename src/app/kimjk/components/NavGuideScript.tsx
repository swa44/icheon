"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavGuideScript() {
  const pathname = usePathname();

  useEffect(() => {
    // 이벤트 리스너 제거 함수 저장용 변수
    let removeListener: (() => void) | null = null;
    let timer: NodeJS.Timeout | null = null;

    const init = () => {
      const navGuide = document.getElementById("navGuide");
      const nav = document.querySelector("nav");

      // 요소를 못 찾으면 (아직 렌더링 중일 수 있음)
      if (!navGuide || !nav) {
        return;
      }

      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
          navGuide.classList.add("show");
          nav.classList.add("highlight");
        } else if (scrollTop < 50) {
          navGuide.classList.remove("show");
          nav.classList.remove("highlight");
        }
      };

      // 초기 상태 체크
      handleScroll();

      // 이벤트 리스너 등록
      window.addEventListener("scroll", handleScroll);

      // 제거 함수 설정
      removeListener = () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    // 약간의 지연을 주어 DOM이 확실히 업데이트된 후 실행
    timer = setTimeout(init, 100);

    // cleanup 함수
    return () => {
      if (timer) clearTimeout(timer);
      if (removeListener) removeListener();
    };
  }, [pathname]); // 경로가 변경될 때마다 실행

  return null;
}
