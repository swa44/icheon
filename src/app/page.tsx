"use client";

import { useState, useEffect, useRef } from "react";
import "./icheon-main.css";

const FILTER_TABS = [
  { key: "전체", label: "전체", count: 7 },
  { key: "시장", label: "시장", count: 1 },
  { key: "도의원", label: "도의원", count: 2 },
  { key: "시의원", label: "시의원", count: 3 },
  { key: "비례", label: "비례", count: 1 },
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
  profileImg: string | null;
};

const CANDIDATES: Candidate[] = [
  // 시장
  {
    id: 1,
    positionType: "시장",
    positionLabel: "이천시장 후보",
    district: "이천시",
    name: "김경희",
    number: "2",
    slogan: "이천 성장 지금이 골든타임",
    tags: [],
    profileImg: "/2026profile/김경희.webp",
  },
  // 도의원 — 1선거구 → 2선거구
  {
    id: 2,
    positionType: "도의원",
    positionLabel: "경기도의회의원 후보",
    district: "이천시 제1선거구",
    name: "김일중",
    number: "2",
    slogan: "믿고, 다시!",
    tags: ["#태그1", "#태그2"],
    profileImg: "/2026profile/김일중.webp",
  },
  {
    id: 3,
    positionType: "도의원",
    positionLabel: "경기도의회의원 후보",
    district: "이천시 제2선거구",
    name: "허원",
    number: "2",
    slogan: "3선의 힘으로 예산 왕창 끌어오겠습니다!",
    tags: ["#겸손", "#열정"],
    profileImg: "/2026profile/허원.webp",
  },
  // 시의원 — 가선거구(2-가 → 2-나) → 나선거구(2-나)
  {
    id: 4,
    positionType: "시의원",
    positionLabel: "이천시의회의원 후보",
    district: "이천시 가선거구",
    name: "김재국",
    number: "2-가",
    slogan: "발로 뛰는 현장정치!",
    tags: ["#희망포인트"],
    profileImg: "/2026profile/김재국.webp",
  },
  {
    id: 5,
    positionType: "시의원",
    positionLabel: "이천시의회의원 후보",
    district: "이천시 가선거구",
    name: "박명서",
    number: "2-나",
    slogan: "검증된 시민의 일꾼!",
    tags: [],
    profileImg: "/2026profile/박명서.webp",
  },
  {
    id: 6,
    positionType: "시의원",
    positionLabel: "이천시의회의원 후보",
    district: "이천시 나선거구",
    name: "박선진",
    number: "2-나",
    slogan: "힘들때, 곁에서 위로가 되어주는 사람!",
    tags: [],
    profileImg: "/2026profile/박선진.webp",
  },
  // 비례
  {
    id: 7,
    positionType: "비례",
    positionLabel: "이천시비례대표 후보",
    district: "이천시",
    name: "최은정",
    number: "2",
    slogan: "이제 이천이 올라갈 시간!",
    tags: [],
    profileImg: "/2026profile/최은정.webp",
  },
];

export default function IcheonMainPage() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selected, setSelected] = useState<Candidate | null>(null);
  const [gongboImages, setGongboImages] = useState<string[]>([]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [displayScale, setDisplayScale] = useState(1);
  const scaleRef = useRef(1);
  const pinchRef = useRef({ dist: 0, baseScale: 1 });
  const swipeRef = useRef({ startX: 0, startY: 0 });
  const lightboxWrapRef = useRef<HTMLDivElement>(null);

  function openLightbox(i: number) {
    setLightboxIndex(i);
    setDisplayScale(1);
    scaleRef.current = 1;
  }

  function closeLightbox() {
    setLightboxIndex(null);
    setDisplayScale(1);
    scaleRef.current = 1;
  }

  function goNext() {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % gongboImages.length : null,
    );
    setDisplayScale(1);
    scaleRef.current = 1;
  }

  function goPrev() {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + gongboImages.length) % gongboImages.length : null,
    );
    setDisplayScale(1);
    scaleRef.current = 1;
  }

  useEffect(() => {
    if (!selected) {
      setGongboImages([]);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    fetch(`/api/gongbo/${encodeURIComponent(selected.name)}`)
      .then((r) => r.json())
      .then((data) => setGongboImages(data.files ?? []));
  }, [selected]);

  useEffect(() => {
    const el = lightboxWrapRef.current;
    if (!el || lightboxIndex === null) return;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        pinchRef.current.dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        pinchRef.current.baseScale = scaleRef.current;
      } else if (e.touches.length === 1) {
        swipeRef.current.startX = e.touches[0].clientX;
        swipeRef.current.startY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        const next = Math.min(
          Math.max(
            pinchRef.current.baseScale * (dist / pinchRef.current.dist),
            1,
          ),
          4,
        );
        scaleRef.current = next;
        setDisplayScale(next);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 1 && scaleRef.current <= 1) {
        const dx = e.changedTouches[0].clientX - swipeRef.current.startX;
        const dy = e.changedTouches[0].clientY - swipeRef.current.startY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
          if (dx < 0) goNext();
          else goPrev();
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

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
            <img src="/ppp-logo.webp" alt="국민의힘" className="ppp-logo-img" />
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <div className="ppp-hero">
        <div className="ppp-hero-top">
          <h1 className="ppp-hero-title">
            민생은 살리고! 미래를 여는
            <br />
            <span className="ppp-hero-accent"> 제9회 전국동시지방선거</span>
            <br />
            국민의힘 후보자를 소개합니다.
          </h1>
        </div>
        <p className="ppp-hero-sub">깨끗하고 유능하게! 겸손하고 성실하게!</p>
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
                <div className="ppp-card-badge">
                  {c.positionLabel.replace(/(예비후보|후보)$/, "")}
                  <span className="ppp-card-badge-sub">
                    {c.positionLabel.match(/(예비후보|후보)$/)?.[0]}
                  </span>
                </div>
                {c.district && (
                  <div className="ppp-card-district">{c.district}</div>
                )}
                <div className="ppp-card-name-row">
                  {c.number && (
                    <span className="ppp-card-num-badge">{c.number}</span>
                  )}
                  <span className="ppp-card-name">{c.name}</span>
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
              {gongboImages.length > 0 ? (
                gongboImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selected.name} 공보물 ${i + 1}`}
                    className="ppp-modal-img"
                    onClick={() => openLightbox(i)}
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

      {/* 라이트박스 */}
      {lightboxIndex !== null && (
        <div className="ppp-lightbox">
          <div className="ppp-lightbox-header">
            <span className="ppp-lightbox-counter">
              {lightboxIndex + 1} / {gongboImages.length}
            </span>
            <button className="ppp-lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div ref={lightboxWrapRef} className="ppp-lightbox-scroll">
            <img
              key={lightboxIndex}
              src={gongboImages[lightboxIndex]}
              alt="공보물"
              className="ppp-lightbox-img"
              style={{
                maxHeight: `calc(90dvh * ${displayScale})`,
                maxWidth: `${displayScale * 100}%`,
                width: "auto",
                height: "auto",
              }}
              draggable={false}
              onDoubleClick={() => {
                setDisplayScale(1);
                scaleRef.current = 1;
              }}
            />
          </div>
          {gongboImages.length > 1 && (
            <div className="ppp-lightbox-nav">
              <button
                className="ppp-lightbox-nav-btn"
                onClick={goPrev}
                disabled={lightboxIndex === 0}
              >
                <i className="fas fa-chevron-left" />
              </button>
              <div className="ppp-lightbox-dots">
                {gongboImages.map((_, i) => (
                  <span
                    key={i}
                    className={`ppp-lightbox-dot${i === lightboxIndex ? " active" : ""}`}
                    onClick={() => openLightbox(i)}
                  />
                ))}
              </div>
              <button
                className="ppp-lightbox-nav-btn"
                onClick={goNext}
                disabled={lightboxIndex === gongboImages.length - 1}
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
