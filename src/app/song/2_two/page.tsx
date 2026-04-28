import Link from "next/link";

export default function SongTwo() {
  return (
    <div className="h-full">
      <main>
        <div className="content-section">
          <img src="/song/assets/2605d.webp" width="100%" />
        </div>
        <div className="activity-section">
          <h2 className="section-title">지역/국회 의정활동</h2>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/3 제27회 이천 백사 산수유 꽃축제</span>
            </div>
            <img src="/song/assets/260501.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/5 제27회 이천 도자기 마라톤대회</span>
            </div>
            <img src="/song/assets/260502.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/8 판교 스타트업 정책간담회</span>
            </div>
            <img src="/song/assets/260503.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>
                4/8 미래국토인프라혁신포럼 14차 세미나 ‘국가 인프라 기본법’ 입법
                추진을 위한 토론회
              </span>
            </div>
            <img src="/song/assets/260504.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/9 국조특위 서울중앙지검 현장조사</span>
            </div>
            <img src="/song/assets/260505.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/9 뉴스핌 서울이코노믹포럼 토론</span>
            </div>
            <img src="/song/assets/260506.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/10 SK하이닉스 하이패스 IC 현장 점검</span>
            </div>
            <img src="/song/assets/260507.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/15 해병대 원로 위로 행사 및 준4군 체제 입법 설명회</span>
            </div>
            <img src="/song/assets/260508.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/20 제46회 장애인의 날 기념식</span>
            </div>
            <img src="/song/assets/260509.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/23 채널A 정치시그널 출연</span>
            </div>
            <img src="/song/assets/260510.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/23 국조특위 감사원 현장조사</span>
            </div>
            <img src="/song/assets/260511.webp" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>4/26 제40회 이천 도자기축제</span>
            </div>
            <img src="/song/assets/260512.webp" width="100%" loading="lazy" />
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
              href="https://n.news.naver.com/mnews/article/015/0005270375?sid=102"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  감찰 기능 마비된 법원…2년간 판사 중징계 '0건' <br />
                  (2026.04.02. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/448/0000601282?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 "조작 녹취록 틀고 국정조사하겠다는 것기 막혀…판사들
                  치를 떨 것"
                  <br />
                  [현장영상] (2026.04.03. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.kihoilbo.co.kr/news/articleView.html?idxno=3018701"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 국회의원, ‘소형화물차 유류비 최대 100만 원 환급’ 법안
                  발의
                  <br />
                  (2026.04.06. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.sejungilbo.com/news/articleView.html?idxno=57630"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준, 판교 스타트업 간담회…이천 밸리 추진 논의 <br />
                  (2026.04.08. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/448/0000602598?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준, 박상용 위증 고발에 분노 "이게 도대체 뭐 하는 겁니까?"{" "}
                  <br />
                  [현장영상] (2026.04.09. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.newspim.com/news/view/20260409000921"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  '주거 복지는 저출산 극복의 필수품..여야 합의로 중장기 플랜
                  만든다' 토론
                  <br />
                  (2026.04.09. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/055/0001347488?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  [정치쇼] 송석준 "국조특위 현장조사? 현장체험 수준…한동훈 증인
                  불러야"
                  <br />
                  (2026.04.10. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/448/0000602959?sid=162"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  野 송석준 "한동훈, 부산 출마? 우린 무공천하는 게 바람직"{" "}
                  <br />
                  (2026.03.25. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.sentv.co.kr/article/view/sentv202604130104"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 의원, 고담 · 대월 하이패스 IC 간담회 개최 <br />
                  (2026.04.13. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/056/0012163820?sid=162"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  국힘 송석준 “장동혁, 모든 세력 한동훈·유승민 끌어모으라…방미는
                  총사령관의 이탈” <br />
                  (2026.04.16. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/277/0005752561?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  국힘 경기의원 "자체 선대위 즉시 발족…수도권 승리 전초 될 것"{" "}
                  <br />
                  (2026.04.21. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/449/0000342721?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  국힘 송석준 “조국이 후보로 나올 정도로 우리가 수세…가슴 아파”
                  [정치시그널] <br />
                  (2026.04.23. 보도)
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
