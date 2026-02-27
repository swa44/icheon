import Link from "next/link";

export default function SongTwo() {
  return (
    <div className="h-full">
      <main>
        <div className="content-section">
          <img src="/song/assets/2509home.jpg" width="100%" />
        </div>
        <div className="activity-section">
          <h2 className="section-title">지역/국회 의정활동</h2>

          <div className="activity-card">
            <div className="activity-title">
              <span>•시내권 의정보고회</span>
            </div>
            <img src="/song/assets/260301.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•대월면 의정보고회</span>
            </div>
            <img src="/song/assets/260302.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•부발읍 의정보고회</span>
            </div>
            <img src="/song/assets/260303.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•호법면 의정보고회</span>
            </div>
            <img src="/song/assets/260304.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•마장면 의정보고회</span>
            </div>
            <img src="/song/assets/260305.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•백사면 의정보고회</span>
            </div>
            <img src="/song/assets/260306.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•신둔면 의정보고회</span>
            </div>
            <img src="/song/assets/260307.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•장호원읍 의정보고회</span>
            </div>
            <img src="/song/assets/260308.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•율면 의정보고회</span>
            </div>
            <img src="/song/assets/260309.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•모가면 의정보고회</span>
            </div>
            <img src="/song/assets/260310.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>•설성면 의정보고회</span>
            </div>
            <img src="/song/assets/260311.jpg" width="100%" loading="lazy" />
          </div>

          {/*
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
*/}
          <h2 className="section-title">보도자료</h2>
          <p className="section-subtitle">
            각 카드를 클릭하면 해당 기사로 연결됩니다
          </p>

          <div className="news-list" style={{ marginBottom: "50px" }}>
            <a
              href="https://news.bbsi.co.kr/news/articleView.html?idxno=4065802"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “日반출 된 이천오층석탑과 환수염원탑 교환하고 <br />
                  명품 도자기까지” (2026.02.05 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.pinpointnews.co.kr/news/articleView.html?idxno=426168"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 의원, “반도체 산업 경쟁력 강화 특별법 본회의 통과"
                  <br />
                  (2026.02.05. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.kyeonggi.com/article/20260225580311"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준, 한강사랑포럼 2기 용인회의 개최…
                  <br />
                  "자연보전권역 중첩규제, 더는 성역 아니다"(2026.02.25. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/021/0002773496?sid=102"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  6년간 법관 180명 피소됐는데… 고소·고발 더 폭증할 우려
                  <br />
                  (2026.02.26 보도)
                </span>
              </div>
            </a>
            {/*
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
            </a>*/}
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
