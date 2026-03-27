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
              <span>3/2 대월 자채농요 향토유산지정 축하행사</span>
            </div>
            <img src="/song/assets/260401.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/5 사법파괴 3법 거부권 촉구대회</span>
            </div>
            <img src="/song/assets/2604021.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/6 코로나19 대응실태 현안질의 요구</span>
            </div>
            <img src="/song/assets/2604031.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/7 이천제일고 총동문 장학회 정기총회</span>
            </div>
            <img src="/song/assets/260404.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/8 이천시 청년 소상공인회 척사대회</span>
            </div>
            <img src="/song/assets/260405.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/14 동원대 CEO 총원우회 산악동호회 시산제</span>
            </div>
            <img src="/song/assets/260406.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/20 청미노인복지관 국회 방문</span>
            </div>
            <img src="/song/assets/260407.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/20 공소청법 반대 필리버스터</span>
            </div>
            <img src="/song/assets/2604081.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/24 이천향교 석전 봉행</span>
            </div>
            <img src="/song/assets/260409.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/25 한강사랑포럼 제2기 3차 국회토론회</span>
            </div>
            <img src="/song/assets/260410.jpg" width="100%" loading="lazy" />
          </div>

          <div className="activity-card">
            <div className="activity-title">
              <span>3/25 국정조사특별위원회 회의</span>
            </div>
            <img src="/song/assets/260411.jpg" width="100%" loading="lazy" />
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
              href="https://www.kihoilbo.co.kr/news/articleView.html?idxno=3015624"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 의원, 수도권 과잉규제 해소 토론회 개최…
                  <br />
                  건의문 전달 예정 (2026.03.09. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/666/0000098593?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “대통령님, 말로만 하지 말고 악법부터 폐지하라”
                  <br />
                  (2026.03.09. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.newsworks.co.kr/news/articleView.html?idxno=833539"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 "쟁의·소송 지옥 될 노란봉투법 시행 즉각 중단하라"{" "}
                  <br />
                  (2026.03.10. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://n.news.naver.com/mnews/article/448/0000596897?sid=100"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 "추미애, 황당무계한 안건으로 회의하는 척"
                  <br />
                  [현장영상] (2026.03.16. 보도)
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
                  송석준, 영세사업자 화물차 유류, ‘교통·에너지·환경세도 100만원
                  환급’ 추진 <br />
                  (2026.03.23. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.ilyosisa.co.kr/mobile/article.html?no=254898"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  &lt;일요대담&gt; 국민의힘 송석준 의원 (인터뷰, 2026.03.24.
                  보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.joongboo.com/news/articleView.html?idxno=363720600"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 “경강선 출근 시간 배차 간격 조정… <br />
                  대기시간 최대 10분 단축” (2026.03.24. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.joongboo.com/news/articleView.html?idxno=363720764"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  [정치돋보기] ‘수도권 vs 지방’ 이분법 넘어, 이제는 ‘상생의
                  성장판’ 열 때 <br />
                  (2026.03.25. 보도)
                </span>
              </div>
            </a>

            <a
              href="https://www.breaknews.com/1194894"
              target="_blank"
              rel="noopener"
              className="article-card"
            >
              <div className="activity-title">
                <span>
                  송석준 국민의힘 의원, 수도권 중첩규제 해소위한 정책토론회개최
                  <br />
                  (2026.03.25. 보도)
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
