"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  images: string[];
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  // 터치 스와이프 상태
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    fetch("/api/posts", { cache: "no-store", headers: { Pragma: "no-cache" } })
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-[24px] shadow-sm overflow-hidden p-5 border border-gray-100 animate-pulse">
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-[20px] mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
      </div>
    );
  }

  const post = posts[0];
  const hasMultipleImages = post.images && post.images.length > 1;

  // 모달 제어
  const closeFullScreen = () => setFullScreenIndex(null);

  const nextImage = () => {
    setFullScreenIndex((prev) =>
      prev !== null ? (prev + 1) % post.images.length : null,
    );
  };

  const prevImage = () => {
    setFullScreenIndex((prev) =>
      prev !== null
        ? (prev - 1 + post.images.length) % post.images.length
        : null,
    );
  };

  // 터치 핸들러
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
    <div className="overflow-hidden">
      {/* 가로 스크롤 이미지 컨테이너 */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {post.images && post.images.length > 0 ? (
          post.images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full aspect-[4/3] relative rounded-[20px] overflow-hidden shadow-sm bg-gray-100 snap-center cursor-pointer"
              onClick={() => setFullScreenIndex(idx)}
            >
              <Image
                src={img}
                alt={`post image ${idx + 1}`}
                fill
                className="object-cover"
              />
              {/* 이미지 카운터 (다중 이미지일 때만) */}
              {hasMultipleImages && (
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-md">
                  {idx + 1} / {post.images.length}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-50 rounded-[20px] text-gray-300">
            <i className="fas fa-image text-4xl opacity-50"></i>
          </div>
        )}
      </div>

      {/* 컨텐츠 영역 */}
      <div className="mt-2">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight tracking-tight mt-1">
          {post.title}
        </h3>
        <p className="text-xs text-gray-400 mb-4 font-medium tracking-wide flex items-center gap-1">
          <i className="far fa-clock"></i> {post.date.replace(/-/g, ".")}
        </p>
        <p className="text-gray-600 text-[15px] leading-relaxed font-normal whitespace-pre-wrap">
          {post.content}
        </p>
      </div>

      {/* 전체 화면 이미지 모달 (슬라이드 애니메이션 적용) */}
      {fullScreenIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-[fadeIn_0.2s_ease-out] select-none"
          onClick={closeFullScreen}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 z-50 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeFullScreen}
          >
            <i className="fas fa-times text-3xl"></i>
          </button>

          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {/* 슬라이드 트랙: translateX로 이동 */}
            <div
              className="flex h-full w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${fullScreenIndex * 100}%)` }}
            >
              {post.images.map((img, idx) => (
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
                      priority={Math.abs(idx - fullScreenIndex) <= 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 모달 내부 네비게이션 (다중 이미지일 때만) */}
          {hasMultipleImages && (
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

              {/* 인디케이터 */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-50 backdrop-blur-sm">
                {fullScreenIndex + 1} / {post.images.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
