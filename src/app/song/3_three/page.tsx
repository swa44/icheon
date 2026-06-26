"use client";

import Link from "next/link";
import { useState } from "react";

function VideoPlayer({
  videoId,
  title,
}: {
  videoId: string;
  title: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="floating-card">
      <div className="video-title">{title}</div>
      <div className="video-container" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <div className="thumbnail-overlay">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="video-thumbnail"
            />
            <div className="play-button" aria-label="재생"></div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Youtube Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default function SongThree() {
  const openYouTube = (e: React.MouseEvent, videoId: string) => {
    e.preventDefault();
    const webUrl = `https://youtu.be/${videoId}`;
    const iosUrl = `youtube://www.youtube.com/watch?v=${videoId}`;
    const androidUrl = `intent://www.youtube.com/watch?v=${videoId}#Intent;package=com.google.android.youtube;scheme=https;end`;

    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";

    if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = iosUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 500);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  return (
    <div className="h-full">
      <main>
        <div className="content-section">
          <img
            src="/song/assets/3p_1.jpg"
            alt="영상보기 메인"
            width="100%"
            loading="eager"
          />
        </div>

        {/* 주요방송 풀버전 섹션 추가
        <div className="px-4 mt-6 mb-2">
          <div className="bg-gray-50 rounded-2xl px-3 py-4 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#e61e2b] rounded-full"></span>
              주요방송 풀버전
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://youtu.be/2o_UcXA04BY"
                onClick={(e) => openYouTube(e, "2o_UcXA04BY")}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all no-underline pc-hover-red"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug pc-hover-text">
                  [KBS 일요진단] 6.3 지방선거 각 당 현안
                </p>
                <span className="text-xs text-[#e61e2b] font-medium flex items-center gap-1">
                  영상 보기{" "}
                  <i className="fas fa-external-link-alt text-[10px]"></i>
                </span>
              </a>

              <a
                href="https://youtu.be/VAT1gAvqW-0"
                onClick={(e) => openYouTube(e, "VAT1gAvqW-0")}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all no-underline pc-hover-red"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug pc-hover-text">
                  [채널A 정치시그널] 송석준 "조응천도 접촉…막판 대전환 위해
                  무엇도 회피 안 돼"
                </p>
                <span className="text-xs text-[#e61e2b] font-medium flex items-center gap-1">
                  영상 보기{" "}
                  <i className="fas fa-external-link-alt text-[10px]"></i>
                </span>
              </a>

              <a
                href="https://youtu.be/w5InUV2mhyg"
                onClick={(e) => openYouTube(e, "w5InUV2mhyg")}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all no-underline pc-hover-red"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug pc-hover-text">
                  [MBC 뉴스 투데이] 송석준 "한동훈도 연대해야"
                </p>
                <span className="text-xs text-[#e61e2b] font-medium flex items-center gap-1">
                  영상 보기{" "}
                  <i className="fas fa-external-link-alt text-[10px]"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        */}

        <div className="content-section" style={{ marginBottom: "50px" }}>
          <VideoPlayer
            videoId="hy9dsFOvPUE"
            title={
              <>
                <span className="badge">BBS 인터뷰</span>
                <span>
                  이화영 위증 판결 부정하는 민주당, 진실이 불편하면 판결도
                  부정하나?
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="4t2IQ1LRin8"
            title={
              <>
                <span className="badge">정치시그널</span>
                <span>
                  정부의 사법파괴와 민생파탄 저지를 위해서라도 대통합 필요!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="wBscQaOj7Jw"
            title={
              <>
                <span className="badge">정치시그널</span>
                <span>장동혁 사퇴 촉구, 송석준의 속마음은?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="CBZz4XltHdQ"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>선거 졌는데 성찰과 반성 대신 기강 확립?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="NC9KM46LyWY"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>변화와 혁신으로 거듭나기 위한 결단이 필요한 때</span>
              </>
            }
          />

          <VideoPlayer
            videoId="xDOoZKlirfg"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>선관위 난맥상, 국정조사로 바로 잡는 것이 우선!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="IUXwQXldy-Y"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>경제파탄·선거부실 등 이제는 정부심판의 시간</span>
              </>
            }
          />

          <VideoPlayer
            videoId="AceNruvXOwg"
            title={
              <>
                <span className="badge">반도체</span>
                <span>
                  반도체는 정치가 아니라 산업입니다. 경기도 반도체 끝까지
                  사수하겠습니다!
                </span>
              </>
            }
          />
        </div>
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
          <Link href="/song/4_four" aria-label="지역주요사업 보기">
            <i className="fas fa-map-marked-alt icon"></i>
            <span>지역주요사업</span>
          </Link>
          <Link href="/song/3_three" className="active" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상보기</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
