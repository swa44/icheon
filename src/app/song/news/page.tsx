"use client";

import { useEffect, useState, TouchEvent } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  images: string[];
}

interface GroupedPosts {
  [key: string]: BlogPost[];
}

export default function NewsPage() {
  const [groupedPosts, setGroupedPosts] = useState<GroupedPosts>({});
  const [loading, setLoading] = useState(true);

  // 전체 화면 이미지 데이터 상태 (현재 보고 있는 이미지들, 현재 인덱스)
  const [modalData, setModalData] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  // 터치 스와이프 상태
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts?all=true");
        const data = await res.json();
        if (data.posts) {
          const groups: GroupedPosts = {};
          data.posts.forEach((post: BlogPost) => {
            const dateObj = new Date(post.date);
            const key = `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(post);
          });
          setGroupedPosts(groups);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const sortedMonthKeys = Object.keys(groupedPosts).sort((a, b) => {
    const dateA = new Date(a.replace("년 ", "-").replace("월", "-01"));
    const dateB = new Date(b.replace("년 ", "-").replace("월", "-01"));
    return dateB.getTime() - dateA.getTime();
  });

  const closeModal = () => setModalData(null);

  const nextImage = () => {
    if (!modalData) return;
    setModalData((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index + 1) % prev.images.length,
          }
        : null,
    );
  };

  const prevImage = () => {
    if (!modalData) return;
    setModalData((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
          }
        : null,
    );
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 헤더 */}
      <div className="bg-white px-4 py-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
        <Link
          href="/song"
          className="text-gray-600 p-2 -ml-2 hover:bg-gray-100 rounded-full no-underline"
        >
          <i className="fas fa-arrow-left text-xl"></i>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">지난 소식</h1>
      </div>

      <main className="p-4 space-y-8">
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            <i className="fas fa-spinner fa-spin mr-2"></i> 로딩 중...
          </div>
        ) : sortedMonthKeys.length === 0 ? (
          <div className="text-center py-20 text-gray-500 bg-white rounded-xl border border-gray-200">
            등록된 소식이 없습니다.
          </div>
        ) : (
          sortedMonthKeys.map((monthKey) => (
            <section key={monthKey}>
              <div className="flex items-center gap-2 mb-4 px-1">
                <i className="far fa-calendar-alt text-[#e61e2b]"></i>
                <h2 className="text-lg font-bold text-gray-800">{monthKey}</h2>
              </div>

              <div className="space-y-6">
                {groupedPosts[monthKey].map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    {/* 가로 스크롤 이미지 컨테이너 */}
                    {post.images && post.images.length > 0 && (
                      <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 p-4 pb-2 scrollbar-hide">
                        {post.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="flex-shrink-0 w-full aspect-video relative rounded-xl overflow-hidden bg-gray-100 snap-center cursor-pointer shadow-sm border border-gray-100"
                            onClick={() =>
                              setModalData({ images: post.images, index: idx })
                            }
                          >
                            <Image
                              src={img}
                              alt={`post image ${idx}`}
                              fill
                              className="object-cover"
                            />
                            {/* 인디케이터 (2장 이상일 때) */}
                            {post.images.length > 1 && (
                              <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm font-medium">
                                {idx + 1} / {post.images.length}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-5 pt-2">
                      <div className="text-xs text-[#e61e2b] font-bold mb-2">
                        {post.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                        {post.content}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      {/* 하단 네비게이션 복귀 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20">
        <Link
          href="/song"
          className="bg-[#e61e2b] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#c41a26] transition-colors flex items-center gap-2 no-underline"
        >
          <i className="fas fa-home"></i> 홈으로
        </Link>
      </div>

      {/* 전체화면 모달 (슬라이드 애니메이션 적용) */}
      {modalData && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-fadeIn select-none"
          onClick={closeModal}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 z-50 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeModal}
          >
            <i className="fas fa-times text-3xl"></i>
          </button>

          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {/* 슬라이드 트랙 */}
            <div
              className="flex h-full w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${modalData.index * 100}%)` }}
            >
              {modalData.images.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full h-full flex items-center justify-center p-4"
                >
                  <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
                    <Image
                      src={img}
                      alt={`Full screen ${idx}`}
                      fill
                      className="object-contain"
                      draggable={false}
                      priority={Math.abs(idx - modalData.index) <= 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 및 인디케이터 (이미지가 여러 장일 때만) */}
          {modalData.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50"
              >
                <i className="fas fa-chevron-left text-2xl"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50"
              >
                <i className="fas fa-chevron-right text-2xl"></i>
              </button>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-50 backdrop-blur-sm">
                {modalData.index + 1} / {modalData.images.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
