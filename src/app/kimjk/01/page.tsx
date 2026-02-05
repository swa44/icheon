"use client";

import Link from "next/link";

export default function KimJK01() {
  return (
    <>
      <style jsx global>{`
        .profile-section {
          position: relative;
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color), #c71a0e);
          color: white;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .career-section {
          background: white;
          border-radius: 15px;
          padding: 25px 20px;
          margin: -100px 20px 20px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 100;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid var(--primary-color);
        }

        .section-header i {
          font-size: 1.5rem;
          color: var(--primary-color);
        }

        .section-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2b2b2b;
          margin: 0;
        }

        .career-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .career-item {
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
          color: #2b2b2b;
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .career-item:last-child {
          border-bottom: none;
        }

        .career-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .career-badge.current {
          background: var(--primary-color);
          color: white;
        }

        .career-badge.former {
          background: #999;
          color: white;
        }

        .awards-section {
          background: white;
          border-radius: 15px;
          padding: 25px 20px;
          margin: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .awards-image-container {
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
        }

        .awards-main-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .awards-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .award-box {
          background: #fffbf0;
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 2px solid #ffe082;
          transition: all 0.3s ease;
        }

        .award-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
        }

        .award-medal {
          font-size: 1.8rem;
          color: #ffd700;
          flex-shrink: 0;
        }

        .award-content {
          flex: 1;
        }

        .award-year {
          font-size: 0.85rem;
          color: #e65100;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .award-name {
          font-size: 0.95rem;
          color: #2b2b2b;
          line-height: 1.4;
        }

        .award-host {
          font-size: 0.75rem;
          color: #999;
          margin-top: 5px;
        }
      `}</style>

      <header>
        <nav>
          <Link href="/kimjk" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/kimjk/01" className="active" aria-label="김재국 소개">
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
        {/* 프로필 섹션 */}
        <div className="profile-section">
          <img
            src="/kimjk/assets/1pmain.jpg"
            alt="김재국 의원"
            width="100%"
            loading="eager"
          />
        </div>

        {/* 약력 섹션 */}
        <div className="career-section">
          <div className="section-header">
            <i className="fas fa-user-tie"></i>
            <h2>약력</h2>
          </div>
          <ul className="career-list">
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>이천시의회/의원</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>이천시의회 제8대 후반기 의회 운영위원장</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>이천시축구협회 자문위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>법무부 보호관찰위원회 이천지구 회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>이천시 중앙로타리클럽 회원</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>이천시 백사면 모전 상가번영회 회원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>한국미래산업가스/대표</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>미래에너지/대표</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시의회 국민의힘 원내대표</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 백사면 체육회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 백사면 도지초교 운영위원장</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>장애인 자립생활센터 운영위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 장애인 인권센터 운영위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>국민의힘 백사면 협의회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>국민의힘 이천사랑산악회 회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>국민의힘 이천사랑봉사단 회원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 지역사회보장협의체 회원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>롯데캐슬 골드스카이 입주자대표 회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 체육회 이사</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 산수유꽃축제 추진위원회 이사</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 백사면 바르게살기협의회 이사</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>이천시 장애인 배드민턴협회 이사</span>
            </li>
          </ul>
        </div>

        {/* 수상내역 섹션 */}
        <div className="awards-section" style={{ marginBottom: "70px" }}>
          <div className="section-header">
            <i className="fas fa-trophy"></i>
            <h2>수상내역</h2>
          </div>

          <div className="awards-image-container">
            <img
              src="/kimjk/assets/1paward.jpg"
              alt="수상 사진"
              className="awards-main-image"
            />
          </div>

          <div className="awards-items">
            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2025</div>
                <div className="award-name">의정활동 우수의원</div>
                <div className="award-host">
                  주최 : 경기도시군의회의장협의회
                </div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2025</div>
                <div className="award-name">우수의정 그랜드마스터상</div>
                <div className="award-host">주최 : 경기도일간기자단</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2025</div>
                <div className="award-name">지방자치의정대상</div>
                <div className="award-host">주최 : (사)한국유권자중앙회</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2025</div>
                <div className="award-name">
                  이노베이션 & 소비자가 선호하는 혁신기업 브랜드대상
                </div>
                <div className="award-host">주최 : 헤럴드경제</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2025</div>
                <div className="award-name">장애인의날 감사패 수상</div>
                <div className="award-host">주최 : 이천시장애인연합회</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2024</div>
                <div className="award-name">OBS 자치분권대상</div>
                <div className="award-host">주최 : OBS</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2023</div>
                <div className="award-name">의정활동 우수의원</div>
                <div className="award-host">
                  주최 : 경기도시군의회의장협의회
                </div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2023</div>
                <div className="award-name">사회공헌 표창</div>
                <div className="award-host">주최 : 법무부 수원보호관찰소</div>
              </div>
            </div>

            <div className="award-box">
              <i className="fas fa-medal award-medal"></i>
              <div className="award-content">
                <div className="award-year">2022</div>
                <div className="award-name">의정활동 우수의원</div>
                <div className="award-host">
                  주최 : 경기동부권시군의장협의회
                </div>
              </div>
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
