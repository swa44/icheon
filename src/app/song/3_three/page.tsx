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
            videoId="TsxXNVqQpXU"
            title={
              <>
                <span className="badge">무제한토론</span>
                <span>
                  민주당의 사법부 장악, 일반 국민 소송지옥으로 몰아간다
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="QkLpBndMQHk"
            title={
              <>
                <span className="badge">무제한토론</span>
                <span>사실심 부실화, 대법원 가분수화</span>
              </>
            }
          />

          <VideoPlayer
            videoId="OvhgH5rtBMA"
            title={
              <>
                <span className="badge">무제한토론</span>
                <span>
                  제동장치 고장난 민주당, 지금이라도 사법개악 중단 필요
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="1bA0z1W1QzI"
            title={
              <>
                <span className="badge">법사위</span>
                <span>사법장악은 일사천리, 국민생명은 묵묵부답</span>
              </>
            }
          />

          <VideoPlayer
            videoId="XXwwyQ9cxdU"
            title={
              <>
                <span className="badge">법사위</span>
                <span>돈 없으면 국민 세금을 마음대로 갖다 쓰겠다는 건가?</span>
              </>
            }
          />

          <VideoPlayer
            videoId="MQNCECsK2Q8"
            title={
              <>
                <span className="badge">이천사랑</span>
                <span>관고전통시장 장날입니다.</span>
              </>
            }
          />

          <VideoPlayer
            videoId="WnVco9R7d7Q"
            title={
              <>
                <span className="badge">이천사랑</span>
                <span>매주 토요일은 크린이천 봉사!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="0dHAUVdqcn4"
            title={
              <>
                <span className="badge">기자회견</span>
                <span>사법장악에는 일사천리 국민생명에는 직무유기</span>
              </>
            }
          />

          <VideoPlayer
            videoId="-nGTCq1FmWM"
            title={
              <>
                <span className="badge">법사위</span>
                <span>권력의 수사권 장악이 국민을 위한 검찰개혁?!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="i1nxE0et3V8"
            title={
              <>
                <span className="badge">무제한토론</span>
                <span>내편무죄, 유권무죄 민주당 사법개악!</span>
              </>
            }
          />

          <VideoPlayer
            videoId="7aLMT4rtN5M"
            title={
              <>
                <span className="badge">무제한토론</span>
                <span>
                  불리하면 비상계엄 타령하는 민주당에 팩트로 반격하는 송석준!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="ms6dc8OlEuM"
            title={
              <>
                <span className="badge">경강선</span>
                <span>
                  경강선 출근시간대 배차간격 조정! 대기시간 최대 10분 단축!
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="WQmUDkTkwUA"
            title={
              <>
                <span className="badge">청년간담회</span>
                <span>
                  세대간의 벽을 허물고 함께 상생하는 지역사회를 만들어
                  가겠습니다
                </span>
              </>
            }
          />

          <VideoPlayer
            videoId="rgQx6SLygmA"
            title={
              <>
                <span className="badge">국조특위</span>
                <span>국조특위로 이재명 죄 세탁하려는 민주당에 경고!</span>
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
