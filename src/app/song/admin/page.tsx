"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

// UUID 생성 (이미지 파일명 중복 방지)
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0.3) | 0.8;
    return v.toString(16);
  });
};

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"posts" | "suggestions">("posts");

  // 게시글 상태
  const [posts, setPosts] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // 업로드 로딩 상태
  const [currentPost, setCurrentPost] = useState<any>({
    id: null,
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    images: [], // 여기엔 이제 URL 문자열만 들어갑니다
  });

  // 건의함 상태
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 관리자 로그인 처리
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAdmin(true);
        fetchPosts();
        fetchSuggestions();
      } else {
        alert(data.message || "비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  // 데이터 불러오기
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts", {
        cache: "no-store",
        headers: { Pragma: "no-cache" },
      });
      const data = await res.json();
      if (data.posts) setPosts(data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSuggestions = async () => {
    try {
      const res = await fetch("/api/suggestions", {
        cache: "no-store",
        headers: { Pragma: "no-cache" },
      });
      const data = await res.json();
      if (data.suggestions) setSuggestions(data.suggestions);
    } catch (error) {
      console.error(error);
    }
  };

  // CSV 다운로드 기능
  const downloadCSV = () => {
    if (suggestions.length === 0) {
      alert("다운로드할 데이터가 없습니다.");
      return;
    }

    const headers = ["ID", "이름", "제목", "내용", "작성일시"];
    const rows = suggestions.map((s) => [
      s.id,
      `"${s.name}"`,
      `"${s.title.replace(/"/g, '""')}"`,
      `"${s.content.replace(/"/g, '""').replace(/\n/g, " ")}"`,
      `"${new Date(s.created_at).toLocaleString()}"`,
    ]);

    const BOM = "\uFEFF";
    const csvContent =
      BOM + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `건의함_목록_${new Date().toISOString().split("T")[0]}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeleteAllSuggestions = async () => {
    if (
      !confirm(
        "정말로 모든 건의사항을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.",
      )
    )
      return;

    try {
      const res = await fetch("/api/suggestions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deleteAll: true }),
      });

      if (res.ok) {
        alert("모든 건의사항이 삭제되었습니다.");
        fetchSuggestions();
      } else {
        alert("삭제 실패");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  // 이미지 업로드 처리 (Supabase Storage)
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const fileExt = file.name.split(".").pop();
        const fileName = `${generateUUID()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("post-images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("post-images").getPublicUrl(filePath);

        return publicUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);

      setCurrentPost((prev: any) => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls],
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
      // 같은 파일 다시 올릴 수 있게 초기화
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    setCurrentPost((prev: any) => ({
      ...prev,
      images: prev.images.filter((_: any, i: number) => i !== index),
    }));
  };

  // 게시글 CRUD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isUploading) {
      alert("이미지가 업로드 중입니다. 잠시만 기다려주세요.");
      return;
    }

    const method = isEditing ? "PUT" : "POST";
    const body = JSON.stringify(currentPost);

    try {
      const res = await fetch("/api/posts", {
        method,
        headers: { "Content-Type": "application/json" },
        body,
      });
      if (res.ok) {
        alert(isEditing ? "수정되었습니다." : "등록되었습니다.");
        setIsEditing(false);
        setCurrentPost({
          id: null,
          title: "",
          content: "",
          date: new Date().toISOString().split("T")[0],
          images: [],
        });
        fetchPosts();
      } else {
        alert("저장 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  const handleDeleteSuggestion = async (id: number) => {
    if (!confirm("이 건의사항을 삭제하시겠습니까?")) return;
    await fetch("/api/suggestions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchSuggestions();
  };

  // 수정 모드
  const handleEdit = (post: any) => {
    setIsEditing(true);
    setCurrentPost(post);
    window.scrollTo(0, 0);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPost({
      id: null,
      title: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      images: [],
    });
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">관리자 로그인</h2>
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full border p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#e61e2b] text-white p-2 rounded hover:bg-[#c41a26]"
          >
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">관리자 페이지</h1>

        {/* 탭 네비게이션 */}
        <div className="flex mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("posts")}
            className={`px-6 py-3 font-bold text-lg border-b-2 transition-colors ${
              activeTab === "posts"
                ? "border-[#e61e2b] text-[#e61e2b]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            게시글 관리
          </button>
          <button
            onClick={() => setActiveTab("suggestions")}
            className={`px-6 py-3 font-bold text-lg border-b-2 transition-colors ${
              activeTab === "suggestions"
                ? "border-[#e61e2b] text-[#e61e2b]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            건의함 ({suggestions.length})
          </button>
        </div>

        {activeTab === "posts" && (
          <div>
            {/* 글 작성 폼 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
              <h2 className="text-xl font-bold mb-4">
                {isEditing ? "글 수정하기" : "새 글 작성하기"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    제목
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border p-2 rounded border-gray-300 focus:border-[#e61e2b] outline-none"
                    value={currentPost.title}
                    onChange={(e) =>
                      setCurrentPost({ ...currentPost, title: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      날짜
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border p-2 rounded border-gray-300 focus:border-[#e61e2b] outline-none"
                      value={currentPost.date}
                      onChange={(e) =>
                        setCurrentPost({ ...currentPost, date: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    내용
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border p-2 rounded border-gray-300 focus:border-[#e61e2b] outline-none"
                    value={currentPost.content}
                    onChange={(e) =>
                      setCurrentPost({
                        ...currentPost,
                        content: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    사진 업로드 (여러 장 가능)
                    {isUploading && (
                      <span className="text-blue-500 ml-2 text-sm animate-pulse">
                        업로드 중...
                      </span>
                    )}
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    disabled={isUploading}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#e61e2b10] file:text-[#e61e2b] hover:file:bg-[#e61e2b20] disabled:opacity-50"
                  />

                  {/* 이미지 미리보기 */}
                  {currentPost.images.length > 0 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {currentPost.images.map((img: string, idx: number) => (
                        <div
                          key={idx}
                          className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200 group"
                        >
                          <Image
                            src={img}
                            alt="preview"
                            fill
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-500"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="flex-1 bg-[#e61e2b] text-white py-3 rounded-lg font-bold hover:bg-[#c41a26] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading
                      ? "이미지 업로드 중..."
                      : isEditing
                        ? "수정 완료"
                        : "등록하기"}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-lg font-bold bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      취소
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* 글 목록 */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              등록된 게시글 ({posts.length})
            </h2>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <p className="text-gray-500 text-center py-10 bg-white rounded-lg">
                  등록된 글이 없습니다.
                </p>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-5 items-start"
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                      {post.images && post.images.length > 0 ? (
                        <Image
                          src={post.images[0]}
                          alt="thumbnail"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <i className="fas fa-image"></i>
                        </div>
                      )}
                      {post.images && post.images.length > 1 && (
                        <div className="absolute bottom-0 right-0 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-tl">
                          +{post.images.length - 1}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.content}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-medium"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded hover:bg-red-100 font-medium"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* 건의함 탭 컨텐츠 */}
        {activeTab === "suggestions" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                접수된 건의 ({suggestions.length})
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={downloadCSV}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 flex items-center gap-2"
                >
                  <i className="fas fa-file-csv"></i> Excel/CSV 다운로드
                </button>
                <button
                  onClick={handleDeleteAllSuggestions}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 flex items-center gap-2"
                >
                  <i className="fas fa-trash"></i> 전체 삭제
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {suggestions.length === 0 ? (
                <p className="text-gray-500 text-center py-20 bg-white rounded-lg border border-gray-200">
                  접수된 건의사항이 없습니다.
                </p>
              ) : (
                suggestions.map((s, idx) => (
                  <div
                    key={s.id}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`px-2 py-0.5 text-xs font-bold rounded ${s.name === "익명" ? "bg-gray-100 text-gray-500" : "bg-blue-50 text-blue-600"}`}
                          >
                            {s.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {new Date(s.created_at).toLocaleString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {s.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => handleDeleteSuggestion(s.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-3 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {s.content}
                    </div>

                    {s.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fas fa-phone-alt"></i>
                        <span>{s.phone}</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
