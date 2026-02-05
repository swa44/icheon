import Link from "next/link";

export default function SongTwo() {
  return (
    <div className="h-full">
      <main>
        <div className="content-section">
          <img src="/song/assets/2509home.jpg" width="100%" />
        </div>
        <div className="activity-section">
          <h2 className="section-title">의정보고서</h2>

          <img
            src="/song/assets/202601_1.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 1"
            loading="lazy"
          />

          <img
            src="/song/assets/202601_3.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 3"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_4.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 4"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_5.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 5"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_6.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 6"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_7.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 7"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_8.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 8"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_9.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 9"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_10.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 10"
            loading="lazy"
          />
          <img
            src="/song/assets/202601_12.jpg"
            style={{ width: "100%", marginBottom: "10px", display: "block" }}
            alt="의정보고 이미지 12"
            loading="lazy"
          />

          <h2 className="section-title">보도자료</h2>
          <p className="section-subtitle">
            각 카드를 클릭하면 해당 기사로 연결됩니다
          </p>

          <div className="news-list" style={{ marginBottom: "50px" }}>
            <a
              href="https://www.shinailbo.co.kr/news/articleView.html?idxno=2174267"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “이천시 2026년 환경 관련 국비 400억 확보” (‘26.01.05.
                  보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.asiaa.co.kr/news/articleView.html?idxno=236636"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 의원, 이천시 교통 인프라 국비 1009억 확보 (’26.01.12.
                  보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.m-i.kr/news/articleView.html?idxno=1330966"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  이천시, 장호원읍 생활나눔복합센터 건립 착공식 개최 (’26.01.29
                  보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.pinpointnews.co.kr/news/articleView.html?idxno=412871"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준, “장호원‧설성 체육공원 축구장 인조잔디 교체에 총 8억원
                  확보" (‘26.01.02. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/449/0000332898?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “석고대죄는 정청래가 해야…언어도단·적반하장”
                  [정치시그널] (‘26.01.21)
                </span>
              </div>
            </a>

            <a
              href="https://news.kbs.co.kr/news/pc/view/view.do?ncd=8471357&ref=A"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “한동훈 제명하면 국민의힘 분열해 자멸할 것…지선에서
                  승리할 수 있는 역할 한동훈이 맡아야” [세상의 모든 정보
                  윤인구입니다] (‘26.01.29)
                </span>
              </div>
            </a>
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
          <Link
            href="/song/2_two"
            className="active"
            aria-label="의정보고 보기"
          >
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
