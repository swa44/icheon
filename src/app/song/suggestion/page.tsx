"use client";

import { useState } from "react";
import Link from "next/link";

export default function SuggestionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    title: "",
    content: "",
    isPrivate: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      alert("오류가 발생했습니다.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 text-4xl mx-auto shadow-lg">
            <i className="fas fa-check"></i>
          </div>
          <h2 className="text-2xl font-bold mb-3 text-gray-800">감사합니다!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            소중한 의견을 보내주셨습니다.
            <br />
            송석준 의원이 직접 확인하여
            <br />더 나은 이천을 만드는 데 활용하겠습니다.
          </p>
          <Link
            href="/song"
            className="inline-block bg-[#e61e2b] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#c41a26] transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-24">
        {/* 상단 헤더 */}
        <div className="bg-white text-white px-6 py-2 mb-2">
          <div className="max-w-2xl mx-auto">
            <div className="ml-2 flex items-center gap-4 mb-0">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                <i className="fas fa-paper-plane text-2xl"></i>
              </div>
              <div>
                <h1 className="mt-3 text-black text-3xl font-bold">건의함</h1>
                <p className="text-black text-sm mt-1">
                  송석준 의원에게 무엇이든 제안하세요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 폼 영역 */}
        <div className="px-5 py-6">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            {/* 성함 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">
                  성함 <span className="text-red-500">*</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group select-none">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.isPrivate ? "bg-[#e61e2b] border-[#e61e2b]" : "bg-white border-gray-300 group-hover:border-[#e61e2b]"}`}
                  >
                    {formData.isPrivate && (
                      <i className="fas fa-check text-white text-[10px]"></i>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={formData.isPrivate}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setFormData({
                        ...formData,
                        isPrivate: isChecked,
                        name: isChecked ? "익명" : "",
                      });
                    }}
                  />
                  <span
                    className={`text-xs ${formData.isPrivate ? "text-[#e61e2b] font-bold" : "text-gray-900"}`}
                  >
                    익명으로 보내기
                  </span>
                </label>
              </div>
              <input
                type="text"
                required
                disabled={formData.isPrivate}
                placeholder="이름을 입력해주세요"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${formData.isPrivate ? "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed" : "bg-white border-gray-300 focus:border-[#e61e2b] focus:ring-1 focus:ring-[#e61e2b]"}`}
                value={formData.isPrivate ? "익명" : formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* 제목 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                제목 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="제안 제목을 입력해주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e61e2b] focus:ring-1 focus:ring-[#e61e2b] transition-colors"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            {/* 건의내용 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                건의내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={8}
                placeholder="이천을 위한 소중한 아이디어나 불편사항을 자유롭게 적어주세요."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e61e2b] focus:ring-1 focus:ring-[#e61e2b] transition-colors resize-none"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              ></textarea>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-[#e61e2b] text-white py-2 rounded-lg font-bold text-lg shadow-md hover:bg-[#c41a26] transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              제안 보내기
            </button>

            {/* 안내 문구 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-center text-blue-800 text-sm leading-relaxed">
                <i className="fas fa-info-circle mr-1"></i>
                보내주신 의견은 비공개로 전달되며, <br />
                소중한 의견을 면밀히 검토하겠습니다.
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* 하단 네비게이션 */}
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
          <Link href="/song/3_three" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상보기</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
