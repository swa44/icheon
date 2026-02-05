"use client";

import Link from "next/link";
import { useState } from "react";

interface VideoData {
  id: string;
  badge: string;
  title: string;
}

const videos: VideoData[] = [
  {
    id: "5OegZ1rErXg",
    badge: "시정질의",
    title: "이천시 공유재산 관리 및 복지 사각지대 등 행정 전반 문제 제기",
  },
  {
    id: "aOMvm7PsXwk",
    badge: "5분자유발언",
    title: "이천시 인구위기 대응을 위한 3대 전략 제안",
  },
  {
    id: "Tmva55FYwcY",
    badge: "5분자유발언",
    title: "이천시 어르신 복지서비스 내실화 및 개선 방안 제안",
  },
  {
    id: "QCN7R1diLUs",
    badge: "5분자유발언",
    title: "노후화된 소규모 공동주택에 대한 예산 확대와 지원 강화",
  },
  {
    id: "gK3FYl3s0O8",
    badge: "5분자유발언",
    title: "전기차 화재진압장비 필요성 주장",
  },
  {
    id: "1k_b9Ct15Bo",
    badge: "5분자유발언",
    title: "준초고층 아파트 화재 대응을 위한 민관군 합동 훈련 제안",
  },
];

export default function KimJK03() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const openModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoId("");
  };

  return (
    <>
      <header>
        <nav>
          <Link href="/kimjk" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/kimjk/01" aria-label="김재국 소개">
            <i className="fas fa-user icon"></i>
            <span>김재국</span>
          </Link>
          <Link href="/kimjk/02" aria-label="의정보고 보기">
            <i className="fas fa-clipboard-list icon"></i>
            <span>의정보고</span>
          </Link>
          <Link href="/kimjk/03" className="active" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상</span>
          </Link>
          <Link href="/kimjk/04" aria-label="조례성과 보기">
            <i className="fas fa-scroll icon"></i>
            <span>조례성과</span>
          </Link>
        </nav>
      </header>

      <main>
        <div className="content-section" style={{ marginBottom: "30px" }}>
          {videos.map((video) => (
            <div key={video.id} className="floating-card video-card-v2">
              <div className="video-card-v2-content">
                <div className="video-thumbnail-v2" data-video-id={video.id}>
                  <div className="video-container-v2">
                    <div
                      className="thumbnail-overlay"
                      onClick={() => openModal(video.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                      />
                      <div className="play-button-v2" aria-label="재생"></div>
                    </div>
                  </div>
                </div>
                <div className="video-info-v2">
                  <div className="video-title-v2">
                    <span className="badge-v2">{video.badge}</span>
                    <h3 className="title-text-v2">{video.title}</h3>
                  </div>
                  <p className="video-desc-v2"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="navGuide" className="nav-guide">
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 구경하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>

      {/* 영상 모달 */}
      {modalOpen && (
        <div
          id="videoModal"
          className="video-modal"
          style={{ display: "block" }}
        >
          <div className="video-modal-overlay" onClick={closeModal}></div>
          <div className="video-modal-container">
            <button
              className="video-modal-close"
              aria-label="닫기"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="video-modal-content">
              <div className="video-wrapper">
                <iframe
                  id="videoPlayer"
                  src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
