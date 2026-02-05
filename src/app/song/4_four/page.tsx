import Link from "next/link";
import InteractiveMap from "./InteractiveMap";

export default function SongFour() {
  return (
    <div className="h-full bg-[#f8f9fa]">
      <main className="pb-24">
        {/* 상단 헤더 디자인 */}
        <div className="py-10 pt-10 pb-2 px-6 text-center mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
            이천시 주요사업 <span className="text-[#e61e2b]">성과</span>
          </h2>

          <p className="text-gray-600 font-medium text-lg inline-flex items-center justify-center gap-2 bg-white py-2 px-6 rounded-full shadow-sm mx-auto w-[90%] border border-gray-100">
            <i className="fas fa-hand-pointer text-[#e61e2b] animate-bounce"></i>
            <span>궁금하신 지역을 눌러주세요</span>
          </p>
        </div>

        <InteractiveMap />

        <div id="navGuide" className="nav-guide">
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 구경하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>

      <header>
        <nav>
          <Link href="/song" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/song/1_one" aria-label="송석준 소개">
            <i className="fas fa-user icon"></i>
            <span>송석준</span>
          </Link>
          <Link href="/song/2_two" aria-label="의정보고 보기">
            <i className="fas fa-clipboard-list icon"></i>
            <span>의정보고</span>
          </Link>
          <Link
            href="/song/4_four"
            className="active"
            aria-label="지역주요사업 보기"
          >
            <i className="fas fa-map-marked-alt icon"></i>
            <span>지역주요사업</span>
          </Link>
          <Link href="/song/3_three" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상보기</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
