document.addEventListener("DOMContentLoaded", () => {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach((container) => {
    const videoId = container.dataset.videoId;
    if (!videoId) return;

    const thumbnailOverlay = container.querySelector(".thumbnail-overlay");
    const videoThumbnail = container.querySelector(".video-thumbnail");

    // 1. 유튜브 썸네일 URL을 설정합니다. (maxresdefault가 가장 고화질)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // 고화질 없을 때 대체

    // 썸네일 로딩 시도 (고화질 썸네일이 없으면 대체 이미지를 사용)
    const img = new Image();
    img.src = thumbnailUrl;
    img.onload = () => {
      videoThumbnail.src = thumbnailUrl;
    };
    img.onerror = () => {
      videoThumbnail.src = fallbackThumbnailUrl;
    };

    // 2. 컨테이너 클릭 이벤트 리스너 추가
    container.addEventListener(
      "click",
      (event) => {
        // 이미 iframe이 로드되었다면 다시 클릭해도 아무것도 하지 않음
        if (container.querySelector("iframe")) return;

        // 썸네일 오버레이 제거
        if (thumbnailOverlay) {
          thumbnailOverlay.remove();
        }

        // iframe 동적 생성 및 삽입
        const iframe = document.createElement("iframe");
        // autoplay=1을 추가하여 클릭 즉시 재생되도록 합니다
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.setAttribute("title", "YouTube video player");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "");

        // 생성한 iframe을 video-container에 삽입
        container.appendChild(iframe);
      },
      { once: true }
    ); // 이 리스너는 한 번만 실행되도록 설정
  });
});
