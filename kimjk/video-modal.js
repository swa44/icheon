document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(".video-card-v2");

  // 썸네일 로드
  function loadThumbnails() {
    const videoContainers = document.querySelectorAll(".video-thumbnail-v2");
    videoContainers.forEach(function (container) {
      const videoId = container.getAttribute("data-video-id");
      if (!videoId) return;
      const thumbnailImg = container.querySelector(".video-thumbnail");
      if (!thumbnailImg) return;
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      const tempImg = new Image();
      tempImg.src = thumbnailUrl;
      tempImg.onload = function () {
        thumbnailImg.src = thumbnailUrl;
      };
      tempImg.onerror = function () {
        thumbnailImg.src = fallbackUrl;
      };
    });
  }
  loadThumbnails();

  // 모든 영상 정지 및 썸네일 복원 함수
  function stopAllVideos() {
    const allContainers = document.querySelectorAll(".video-container-v2");
    allContainers.forEach(function (container) {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.remove(); // iframe 제거

        // 썸네일 복원
        const wrapper = container.closest(".video-thumbnail-v2");
        const videoId = wrapper?.getAttribute("data-video-id");

        if (videoId && !container.querySelector(".thumbnail-overlay")) {
          const overlay = document.createElement("div");
          overlay.className = "thumbnail-overlay";

          const img = document.createElement("img");
          img.className = "video-thumbnail";
          img.alt = "Video Thumbnail";
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          const tempImg = new Image();
          tempImg.src = thumbnailUrl;
          tempImg.onload = function () {
            img.src = thumbnailUrl;
          };
          tempImg.onerror = function () {
            img.src = fallbackUrl;
          };

          const playBtn = document.createElement("div");
          playBtn.className = "play-button-v2";
          playBtn.setAttribute("aria-label", "재생");

          overlay.appendChild(img);
          overlay.appendChild(playBtn);
          container.appendChild(overlay);
        }
      }
    });
  }

  // 카드 클릭 시 카드 내에서 재생
  videoCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const container = card.querySelector(".video-container-v2");
      const thumbnail = card.querySelector(".video-thumbnail-v2");
      const videoId = thumbnail.getAttribute("data-video-id");

      if (!videoId) return;

      // 이미 이 카드에서 재생 중이면 무시
      if (container.querySelector("iframe")) return;

      // 다른 모든 영상 정지
      stopAllVideos();

      // 썸네일 제거
      const overlay = container.querySelector(".thumbnail-overlay");
      if (overlay) overlay.remove();

      // iframe 삽입
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0`;
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay; encrypted-media");
      iframe.setAttribute("allowfullscreen", "");
      container.appendChild(iframe);
    });
  });
});
