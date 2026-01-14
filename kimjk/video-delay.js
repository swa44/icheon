document.addEventListener("DOMContentLoaded", () => {
  // 클릭 대상은 video-container-v2 (당신 HTML 구조 기준)
  const videoContainers = document.querySelectorAll(".video-container-v2");

  videoContainers.forEach((container) => {
    // data-video-id는 상위 .video-thumbnail-v2에 있음
    const wrapper = container.closest(".video-thumbnail-v2");
    const videoId = wrapper?.dataset?.videoId;

    if (!videoId) return;

    const thumbnailOverlay = container.querySelector(".thumbnail-overlay");
    const videoThumbnail = container.querySelector(".video-thumbnail");

    // 썸네일 세팅
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    if (videoThumbnail) {
      const img = new Image();
      img.src = thumbnailUrl;
      img.onload = () => (videoThumbnail.src = thumbnailUrl);
      img.onerror = () => (videoThumbnail.src = fallbackThumbnailUrl);
    }

    // 클릭 시 iframe 삽입
    container.addEventListener("click", () => {
      if (container.querySelector("iframe")) return;

      if (thumbnailOverlay) thumbnailOverlay.remove();

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.setAttribute("title", "YouTube video player");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "");

      container.appendChild(iframe);
    });
  });
});
