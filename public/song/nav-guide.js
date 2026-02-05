document.addEventListener("DOMContentLoaded", function () {
  const navGuide = document.getElementById("navGuide");
  const nav = document.querySelector("nav");
  let initialShowDone = false;
  /*
  // 초기 안내 표시 (0.5초 후)
  setTimeout(function () {
    navGuide.classList.add("show");
    nav.classList.add("highlight");

    // 3초 후 자동으로 사라짐
    setTimeout(function () {
      navGuide.classList.remove("show");
      nav.classList.remove("highlight");
      initialShowDone = true;
    }, 5000);
  }, 500);
*/
  // 스크롤 이벤트 감지
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 스크롤이 100px 이상 내려가면 안내 표시
    if (scrollTop > 100) {
      navGuide.classList.add("show");
      nav.classList.add("highlight");
    }
    // 맨 위로 올라가면 안내 숨김 (50px 미만)
    else if (scrollTop < 50) {
      navGuide.classList.remove("show");
      nav.classList.remove("highlight");
    }

    lastScrollTop = scrollTop;
  });
});

// PWA Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/song/sw.js", { scope: "/song/" }).then(
      function (registration) {
        console.log("Song SW registered: ", registration.scope);
      },
      function (err) {
        console.log("Song SW failed: ", err);
      }
    );
  });
}
