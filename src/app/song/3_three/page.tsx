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

    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";

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

        {/* 주요방송 풀버전 섹션 추가 */}
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
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#e61e2b] transition-colors no-underline group"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug group-hover:text-[#e61e2b]">
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
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#e61e2b] transition-colors no-underline group"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug group-hover:text-[#e61e2b]">
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
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#e61e2b] transition-colors no-underline group"
              >
                <p className="text-[15px] font-bold text-gray-800 mb-1 leading-snug group-hover:text-[#e61e2b]">
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

        <div className="content-section" style={{ marginBottom: "50px" }}>
          <VideoPlayer
            videoId="Ag60HOHH1gA"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>
                  "정진상·김현지 왜 안 부릅니까?" 증인까지 골라 뽑는 '조작특위'
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="hhsSiD5hDOs"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>입법권력으로 판결 뒤집기?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="4LdLhuGGrp4"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>
                  결국 연기된 김용 재판, 이것이 재판관여 아니면 무엇입니까?!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="9z89HaA8HYg"
            title={
              <>
                <span className="badge">현장직캠</span>
                <span>'이천밸리' 조성 구체화 위한 첫걸음</span>
              </>
            }
          />

          <VideoPlayer
            videoId="eSoLKUdpCvQ"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>월북몰이 포기 못한 민주당"이게 진짜 조작 아닙니까!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="zqhAwgWwH-c"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>민주당 조작특위 억지주장 못볼 꼴</span>
              </>
            }
          />

          <VideoPlayer
            videoId="uKihBFdY7is"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>김어준 방송서 특검 브리핑?! 정치중립 포기한 특검</span>
              </>
            }
          />

          <VideoPlayer
            videoId="BmmbXbht9kU"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>박상용 입틀막하면 있던 죄가 없어지나?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="BIbqH5W6aQE"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>민주당이 한동훈 증인채택 안(못)하는 이유?!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="ralZf2ni4B8"
            title={
              <>
                <span className="badge">국정조사</span>
                <span>증거가 있다면 재심을 하세요!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="GrdNOfHesl0"
            title={
              <>
                <span className="badge">국정조사</span>
                <span>피고인 변호인이 특검보로?! 짜고 치는 국조특위</span>
              </>
            }
          />

          <VideoPlayer
            videoId="g0SRtZiFMyQ"
            title={
              <>
                <span className="badge">국정조사</span>
                <span>
                  대장동 사건의 본질은 공공의 탈을 쓴 7,886억 범죄수익 잔치!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="CYcYmYT35qA"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>남욱도 인정한?! 위헌국정조사, 편향된 증인채택</span>
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
