import Link from "next/link";

export default function KimJKHome() {
  return (
    <>
      <header>
        <nav>
          <Link href="/kimjk" className="active" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/kimjk/01" aria-label="김재국 소개">
            <i className="fas fa-user icon"></i>
            <span>김재국</span>
          </Link>
          <Link href="/kimjk/02" aria-label="의정보고 보기">
            <i className="fas fa-clipboard-list icon"></i>
            <span>의정보고</span>
          </Link>
          <Link href="/kimjk/03" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상</span>
          </Link>
          <Link href="/kimjk/04" aria-label="조례성과 보기">
            <i className="fas fa-scroll icon"></i>
            <span>조례성과</span>
          </Link>
        </nav>
      </header>

      <main>
        <div className="hero-section">
          <img
            src="/kimjk/assets/homemain.jpg"
            alt="김재국 시의원"
            width="100%"
            loading="eager"
          />
          <div className="news-section" style={{ marginBottom: "-30px" }}>
            <h2 className="news-title">김재국 언론기사</h2>
            <div className="news-grid">
              <a
                href="https://www.newscj.com/news/articleView.html?idxno=3285821"
                target="_blank"
                className="news-card"
                rel="noopener noreferrer"
              >
                <div className="news-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="news-content">
                  <h3>이천형 인구정책 강조하며 해법 제시</h3>
                  <span className="news-source">천지일보</span>
                </div>
                <i className="fas fa-chevron-right news-arrow"></i>
              </a>

              <a
                href="https://www.siminilbo.co.kr/news/newsview.php?ncode=1160279252788497"
                target="_blank"
                className="news-card"
                rel="noopener noreferrer"
              >
                <div className="news-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="news-content">
                  <h3>
                    발달장애인 정책 필요···
                    <br />
                    장애인가족지원센터 설치해야
                  </h3>
                  <span className="news-source">시민일보</span>
                </div>
                <i className="fas fa-chevron-right news-arrow"></i>
              </a>

              <a
                href="https://www.newsroad.co.kr/news/articleView.html?idxno=50548"
                target="_blank"
                className="news-card"
                rel="noopener noreferrer"
              >
                <div className="news-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="news-content">
                  <h3>
                    행정이 어르신들의 '조용한 외침'에 <br />귀 기울여야 할 때
                  </h3>
                  <span className="news-source">뉴스로드</span>
                </div>
                <i className="fas fa-chevron-right news-arrow"></i>
              </a>

              <a
                href="https://www.incheonilbo.com/news/articleView.html?idxno=1281691"
                target="_blank"
                className="news-card"
                rel="noopener noreferrer"
              >
                <div className="news-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="news-content">
                  <h3>학교 체육시설 개방 협약체결 추진</h3>
                  <span className="news-source">인천일보</span>
                </div>
                <i className="fas fa-chevron-right news-arrow"></i>
              </a>

              <a
                href="https://www.kihoilbo.co.kr/news/articleView.html?idxno=1054988"
                target="_blank"
                className="news-card"
                rel="noopener noreferrer"
              >
                <div className="news-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="news-content">
                  <h3>
                    준초고층 건축물 재난관리 조례제정 <br />
                    간담회 개최
                  </h3>
                  <span className="news-source">기호일보</span>
                </div>
                <i className="fas fa-chevron-right news-arrow"></i>
              </a>
            </div>
          </div>
        </div>

        {/* SNS & 연락처 섹션 */}
        <div className="sns-footer-section" style={{ marginBottom: "60px" }}>
          <div className="sns-footer-content">
            <div className="footer-info">
              <p className="footer-text">이천시의원 김재국</p>
              <p className="footer-text">경기 이천시 부악로 40, 이천시청</p>
              <p className="footer-text">Tel. 010-3764-1125</p>
            </div>

            <div className="footer-sns-icons">
              <a
                href="https://www.facebook.com/gimjaegug.104015"
                className="sns-icon-small facebook-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="페이스북"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/gim.jaegug"
                className="sns-icon-small instagram-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="인스타그램"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@이천시김재국"
                className="sns-icon-small youtube-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="유튜브"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div id="navGuide" className="nav-guide">
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 구경하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>
    </>
  );
}
