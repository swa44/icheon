"use client";

import { useState } from "react";
import "./icheon-main.css";

const FILTER_TABS = [
  { key: "전체", label: "전체", count: 2 },
  { key: "시장", label: "시장", count: 0 },
  { key: "도의원", label: "도의원", count: 1 },
  { key: "시의원", label: "시의원", count: 1 },
  { key: "비례", label: "비례", count: 0 },
];

type Candidate = {
  id: number;
  positionType: string;
  positionLabel: string;
  district: string | null;
  name: string;
  number: string | null;
  slogan: string;
  tags: string[];
  profileImg: string | null; // 프로필 사진: "/2026profile/홍길동.jpg"
  gongbo: string[]; // 공보물 이미지: ["/2026profile/홍길동_공보1.jpg", ...]
};

const CANDIDATES: Candidate[] = [
  {
    id: 1,
    positionType: "도의원",
    positionLabel: "경기도의회의원 예비후보",
    district: "이천시 제1선거구",
    name: "김일중",
    number: "2",
    slogan: "믿고, 다시!",
    tags: ["#태그1", "#태그2"],
    profileImg: "/2026profile/김일중.webp",
    gongbo: [],
  },
  {
    id: 2,
    positionType: "시의원",
    positionLabel: "이천시의회의원 예비후보",
    district: "이천시 가선거구",
    name: "김재국",
    number: "2-가",
    slogan: "발로 뛰는 현장정치!",
    tags: ["#희망포인트"],
    profileImg: "/2026profile/김재국.webp",
    gongbo: [],
  },
];

export default function IcheonMainPage() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selected, setSelected] = useState<Candidate | null>(null);

  const filtered =
    activeFilter === "전체"
      ? CANDIDATES
      : CANDIDATES.filter((c) => c.positionType === activeFilter);

  return (
    <div className="ppp-page">
      {/* 헤더 */}
      <header className="ppp-header">
        <div className="ppp-header-inner">
          <div className="ppp-logo">
            <img src="/ppp-logo.png" alt="국민의힘" className="ppp-logo-img" />
          </div>
          <div className="ppp-header-right">
            <button className="ppp-header-btn" aria-label="검색">
              <i className="fas fa-search" />
            </button>
            <button className="ppp-find-btn">후보찾기</button>
            <button className="ppp-header-btn" aria-label="메뉴">
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <div className="ppp-hero">
        <div className="ppp-hero-top">
          <h1 className="ppp-hero-title">
            이천시를 위해 일할
            <br />
            <span className="ppp-hero-accent"> 제9회전국동시지방선거</span>
            <br />
            후보자들을 소개합니다.
          </h1>
          <a href="#" className="ppp-hero-viewall">
            전체보기{" "}
            <i
              className="fas fa-chevron-right"
              style={{ fontSize: "0.6rem" }}
            />
          </a>
        </div>
        <p className="ppp-hero-sub">
          지역의 변화, 주민의 참여와 함께 만들겠습니다.
        </p>
      </div>

      {/* 필터 탭 */}
      <div className="ppp-filter-section">
        <div className="ppp-tabs-wrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`ppp-tab${activeFilter === tab.key ? " active" : ""}`}
              onClick={() => setActiveFilter(tab.key)}
            >
              {tab.label} <span className="ppp-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 후보자 섹션 헤더 */}
      <div className="ppp-section-header">
        <h2 className="ppp-section-title">
          <span className="accent-bar" />
          후보자 소개
        </h2>
        <a href="#" className="ppp-section-viewall">
          전체보기{" "}
          <i className="fas fa-chevron-right" style={{ fontSize: "0.58rem" }} />
        </a>
      </div>

      {/* 후보자 카드 2열 그리드 */}
      <div className="ppp-cards-list">
        {filtered.map((c) => (
          <div key={c.id} className="ppp-card" onClick={() => setSelected(c)}>
            <div className="ppp-card-main">
              {/* 원형 사진 */}
              <div className="ppp-card-photo">
                {c.profileImg ? (
                  <img src={c.profileImg} alt={c.name} />
                ) : (
                  <i className="fas fa-user" />
                )}
              </div>
              {/* 정보 */}
              <div className="ppp-card-info">
                <div className="ppp-card-badge">{c.positionLabel}</div>
                {c.district && (
                  <div className="ppp-card-district">{c.district}</div>
                )}
                <div className="ppp-card-name-row">
                  <span className="ppp-card-name">{c.name}</span>
                  {c.number && (
                    <span className="ppp-card-num-badge">{c.number}</span>
                  )}
                </div>
                <p className="ppp-card-slogan">{c.slogan}</p>
                <div className="ppp-card-tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className="ppp-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="ppp-disclaimer">
        ※ 상기 정보는 예시이며, 실제 후보자 정보와 다를 수 있습니다.
      </p>

      {/* 공보물 모달 */}
      {selected && (
        <div className="ppp-modal-overlay" onClick={() => setSelected(null)}>
          <div className="ppp-modal" onClick={(e) => e.stopPropagation()}>
            {/* 모달 헤더 */}
            <div className="ppp-modal-header">
              <div className="ppp-modal-title">
                <span className="ppp-modal-name">{selected.name} 후보</span>
                <span className="ppp-modal-label">
                  {selected.positionLabel}
                </span>
              </div>
              <button
                className="ppp-modal-close"
                onClick={() => setSelected(null)}
              >
                <i className="fas fa-times" />
              </button>
            </div>

            {/* 모달 본문 — 공보물 이미지 */}
            <div className="ppp-modal-body">
              {selected.gongbo.length > 0 ? (
                selected.gongbo.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selected.name} 공보물 ${i + 1}`}
                    className="ppp-modal-img"
                  />
                ))
              ) : (
                <div className="ppp-modal-empty">
                  <i className="fas fa-file-image" />
                  공보물이 아직 등록되지 않았습니다
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
