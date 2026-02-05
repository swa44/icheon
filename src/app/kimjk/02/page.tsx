import Link from "next/link";

export default function KimJK02() {
  return (
    <>
      <header>
        <nav>
          <Link href="/kimjk" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/kimjk/01" aria-label="김재국 소개">
            <i className="fas fa-user icon"></i>
            <span>김재국</span>
          </Link>
          <Link href="/kimjk/02" className="active" aria-label="의정보고 보기">
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
            src="/kimjk/assets/2pmain.jpg"
            alt="김재국 의원"
            width="100%"
            loading="eager"
          />
        </div>

        <div className="report-fullwidth-container">
          {/* 헤더 섹션 */}
          <div className="report-fullwidth-header">
            <p
              className="report-subtitle typing-text"
              style={{ fontWeight: 800 }}
            >
              안녕하세요 이천시의원 김재국입니다.
            </p>
          </div>

          {/* 섹션 1: 교통 */}
          <div className="report-fullwidth-section">
            <div className="section-fullwidth-image">
              <img
                src="/kimjk/assets/report-traffic.jpg"
                alt="교통 개선 활동"
              />
            </div>
            <div className="section-fullwidth-content">
              <div className="section-header">
                <div className="section-icon traffic">
                  <i className="fas fa-car"></i>
                </div>
                <div className="section-text">
                  <h2 className="kimjk-section-title">
                    교통 불편 해소를 위한 생활정치
                  </h2>
                  <p className="section-desc">
                    출퇴근길, 통학길, 이동 불편 문제를 바로잡았습니다.
                  </p>
                </div>
              </div>
              <ul className="achievement-list">
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>관고동 교차로 개선사업</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>신둔면 인후2리 희망택시 도입 완료</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>송말3리 가각 확장공사</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>송정동 아리숲 빌리지 교차로 신호개선</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>송말3교 교량 불편 지적 및 현장분석 요청</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>개인형 이동장치 관리대책 지원</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 섹션 2: 안전 */}
          <div className="report-fullwidth-section">
            <div className="section-fullwidth-image">
              <img src="/kimjk/assets/report-safety.jpg" alt="안전 정책 활동" />
            </div>
            <div className="section-fullwidth-content">
              <div className="section-header">
                <div className="section-icon safety">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="section-text">
                  <h2 className="kimjk-section-title">
                    생명과 안전을 지키는 책임정치
                  </h2>
                  <p className="section-desc">
                    시민의 안전은 반드시 지켜야 할 책임입니다.
                  </p>
                </div>
              </div>

              <ul className="achievement-list">
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>조읍1리 노인보호구역 개선사업</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    전기차 화재진압장치(드릴렌스) 예산 확보 및 사업 추진
                  </span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    이천시 화재취약계층 주택용 소방시설 지원 조례 제정
                  </span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>이천시 옥외행사의 안전관리에 관한 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>이천시 준초고층 건축물 재난관리 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>이천시 어린이놀이시설 관리에 관한 조례 일부 개정</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 섹션 3: 복지 */}
          <div className="report-fullwidth-section">
            <div className="section-fullwidth-image">
              <img
                src="/kimjk/assets/report-welfare.jpg"
                alt="복지 정책 활동"
              />
            </div>
            <div className="section-fullwidth-content">
              <div className="section-header">
                <div className="section-icon welfare">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div className="section-text">
                  <h2 className="kimjk-section-title">
                    약자를 먼저 챙기는 희망정치
                  </h2>
                  <p className="section-desc">
                    복지는 선언이 아니라 실행입니다.
                  </p>
                </div>
              </div>
              <ul className="achievement-list">
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    발달장애인의 사회활동을 위한 보험 가입 및 지원 조례
                  </span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>장애인전동보조기기 보험 가입 및 지원 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>외국인주민 및 다문화가족 지원조례 일부 개정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>아동학대 예방 및 피해아동 보호에 관한 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>위기가구 발굴 및 지원에 관한 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>여성 경제활동 촉진과 경력단절 예방 조례 제정</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 섹션 4: 성장 */}
          <div className="report-fullwidth-section">
            <div className="section-fullwidth-image">
              <img src="/kimjk/assets/report-growth.jpg" alt="지역 성장 활동" />
            </div>
            <div className="section-fullwidth-content">
              <div className="section-header">
                <div className="section-icon growth">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="section-text">
                  <h2 className="kimjk-section-title">
                    지역의 미래를 키우는 성장정치
                  </h2>
                  <p className="section-desc">
                    자원은 지키고, 산업은 키웠습니다.
                  </p>
                </div>
              </div>

              <ul className="achievement-list" style={{ marginBottom: "70px" }}>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>백사체육공원 인조잔디 설치 교체사업비 확보</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    양봉산업 육성 및 지원에 관한 조례 제정 및 산업 지원
                  </span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>음식관광 활성화에 관한 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>1회용품 사용 저감 지원 조례 제정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>도자기명장 선정 및 운영에 관한 조례 일부 개정</span>
                </li>
                <li className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>커피찌꺼기 순환경제 촉진 및 지원 조례 제정</span>
                </li>
              </ul>
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
