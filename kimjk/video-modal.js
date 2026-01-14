document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const modalOverlay = document.querySelector(".video-modal-overlay");
  const modalClose = document.querySelector(".video-modal-close");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoCards = document.querySelectorAll(".video-card-v2");

  // 모달 열기 함수
  function openModal(videoId) {
    if (!videoId || videoId === "VIDEO_ID_2" || videoId === "VIDEO_ID_3") {
      alert("영상 ID가 설정되지 않았습니다.");
      return;
    }

    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    videoPlayer.src = videoUrl;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // 스크롤 방지
  }

  // 모달 닫기 함수
  function closeModal() {
    modal.style.display = "none";
    videoPlayer.src = ""; // 영상 중지
    document.body.style.overflow = ""; // 스크롤 복원
  }

  // 영상 카드 클릭 이벤트
  videoCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const thumbnail = card.querySelector(".video-thumbnail-v2");
      const videoId = thumbnail.getAttribute("data-video-id");
      openModal(videoId);
    });
  });

  // 닫기 버튼 클릭
  modalClose.addEventListener("click", function () {
    closeModal();
  });

  // 오버레이 클릭
  modalOverlay.addEventListener("click", function () {
    closeModal();
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
