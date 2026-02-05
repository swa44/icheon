"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogPosts from "./BlogPosts";
import PushSubscription from "./components/PushSubscription";

export default function SongHome() {
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 화면을 어느 정도(예: 300px) 내리면 안내 문구 표시
      if (window.scrollY > 300) {
        setShowGuide(true);
      } else {
        setShowGuide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full">
      <main>
        {/* 블로그/SNS 스타일 최근 소식 (API 연동) */}
        <div className="px-4 mb-8 mt-12 pb-8 border-b-[8px] border-[#f4f4f4]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#e61e2b] rounded-full inline-block"></span>
              오늘의 소식
            </h2>
            <PushSubscription />
          </div>

          <BlogPosts />

          <div className="flex justify-end mt-3">
            <Link
              href="/song/news"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#e61e2b] transition-colors font-medium no-underline"
            >
              <span>지난 소식 보기</span>
              <i className="fas fa-chevron-right text-xs mt-0.5"></i>
            </Link>
          </div>
        </div>
        <div className="hero-section">
          {/*
          <img
            src="/song/assets/12home1.jpg"
            alt="송석준 의원"
            width="100%"
            loading="eager"
          />
          */}
          <img
            src="/song/assets/202601_2.jpg"
            style={{
              width: "100%",
              marginBottom: "10px",
              marginTop: "10px",
              display: "block",
            }}
            alt="의정보고 이미지 2"
            loading="lazy"
          />
        </div>

        <div className="contact-profile-card" style={{ marginBottom: "0px" }}>
          <div className="profile-header">
            <h3>이천시민과 함께하는 송석준</h3>
            <p>언제나 여러분의 목소리에 귀 기울이겠습니다</p>
          </div>
          <div className="profile-body">
            <div className="info-container">
              <div className="info-item">
                <div className="icon-box icon-phone">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="text-content">
                  <span className="label">전화번호</span>
                  <span className="value">031-632-1964</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box icon-map">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="text-content">
                  <span className="label">사무실 주소</span>
                  <span className="value">
                    경기도 이천시 중리천로72번길 2, 2층
                  </span>
                </div>
              </div>
            </div>

            <div className="social-container">
              <Link
                href="https://blog.naver.com/seogjuns"
                className="social-btn bg-blog"
                title="블로그"
              >
                <i className="fa-solid fa-b"></i>
              </Link>
              <Link
                href="https://www.instagram.com/songseogjun2000"
                className="social-btn bg-insta"
                title="인스타그램"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                href="https://www.facebook.com/icheonsarang"
                className="social-btn bg-fb"
                title="페이스북"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC5stcMGrLFFzDwdDeTxeHuQ"
                className="social-btn bg-yt"
                title="유튜브"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* 건의함(제안하기) 섹션 추가 */}
        <div className="px-[5%] mb-16">
          <Link
            href="/song/suggestion"
            className="flex items-center justify-between text-white p-1 rounded-[30px] shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] group no-underline"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f532fff, #167a3aff)",
              backgroundColor: "#0f532f",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform ml-4">
                <i className="fas fa-paper-plane"></i>
              </div>
              <div className="flex flex-col justify-center mt-3">
                <h4 className="text-xl text-white font-extrabold mb-0.5">
                  무엇이든 들려주세요.
                </h4>
                <p className="text-white font-normal text-sm">
                  소중한 의견을 기다립니다
                </p>
              </div>
            </div>
            <i className="fas fa-chevron-right text-white text-xl mr-6"></i>
          </Link>
        </div>

        <div id="navGuide" className={`nav-guide ${showGuide ? "show" : ""}`}>
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 구경하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>

      <header>
        <nav>
          <Link href="/song" className="active" aria-label="홈">
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
          <Link href="/song/3_three" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상보기</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
