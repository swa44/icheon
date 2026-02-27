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

        <div className="content-section" style={{ marginBottom: "50px" }}>
          <VideoPlayer
            videoId="LRhtdHIzqNI"
            title={
              <>
                <span className="badge">의정보고</span>
                <span>"현장에서 답을 찾겠습니다" 찾아가는 의정보고회</span>
              </>
            }
          />

          <VideoPlayer
            videoId="shapl9SEoNc"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>
                  이재명 정부 부동산정책, 시장을 대하는 오만한 태도부터 문제!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="vADtaO0KyAQ"
            title={
              <>
                <span className="badge">설 인사</span>
                <span>온가족이 함께 행복한 설 명절 보내세요</span>
              </>
            }
          />

          <VideoPlayer
            videoId="yfwn2ZLNLt0"
            title={
              <>
                <span className="badge">의정보고</span>
                <span>
                  지방도 수도권도 함께 살 길… 송석준, 자연보전권역 규제개선
                  신호탄
                </span>
              </>
            }
          />

          {/* 
          <VideoPlayer
            videoId="gpPbScrAHVs"
            title={
              <>
                <span className="badge">갓생쇼</span>
                <span>
                  트럼프 관세 합의 번복··· 여야 '네 탓' 공방 충돌｜국민의힘
                  "나치즘" vs "빨리 결론" 갈등 격화 with 송석준 국민의힘 의원
                </span>
              </>
            }
          />
        */}
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
