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
            videoId="r_ojxRuBHQs"
            title={
              <>
                <span className="badge">법사위</span>
                <span>지금이 1882년? 초유의 국방예산 미지급 사태</span>
              </>
            }
          />

          <VideoPlayer
            videoId="7kOeHNxcA1Q"
            title={
              <>
                <span className="badge">정치시그널</span>
                <span>
                  송석준 의원, 당게가 왜 지금 이슈? 지금은 민주당 폭주를 향해 한
                  목소리를 낼 때!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="XNH1CpeV_Ak"
            title={
              <>
                <span className="badge">성명서</span>
                <span>종로 뺨은 정권이 때렸는데, 돌은 왜 동지에게 던지나?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="fMASSzbXYLw"
            title={
              <>
                <span className="badge">인터뷰</span>
                <span>
                  방탄입법에는 전광석화! 관세협상에는 무관심한 이재명정부!
                </span>
              </>
            }
          />

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
