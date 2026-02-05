"use client";

import Link from "next/link";

export default function KimJK04() {
  return (
    <>
      <style jsx global>{`
        .ordinance-top-image {
          width: 100%;
          margin-bottom: 10px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .ordinance-top-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .ordinance-container-v3 {
          padding: 30px 20px 20px 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .ordinance-category {
          margin-bottom: 25px;
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .category-header {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          position: relative;
        }

        .category-header.welfare {
          background: linear-gradient(135deg, #4facfe, #03474a);
        }

        .category-header.safety {
          background: linear-gradient(135deg, #f093fb, #f5576c);
        }

        .category-header.growth {
          background: linear-gradient(135deg, #43e97b, #1d7c6b);
        }

        .category-header.admin {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .category-header i {
          font-size: 1.5rem;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
          flex: 1;
        }

        .category-count {
          font-size: 0.9rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.3);
          padding: 5px 12px;
          border-radius: 20px;
        }

        .category-items {
          padding: 20px;
        }

        .category-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .category-item:last-child {
          border-bottom: none;
        }

        .item-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e61e2b;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .item-text {
          font-size: 0.9rem;
          color: #2b2b2b;
          margin: 0;
          line-height: 1.6;
          word-break: keep-all;
        }

        @media (max-width: 375px) {
          .category-title {
            font-size: 1.1rem;
          }

          .item-text {
            font-size: 0.85rem;
          }
        }
      `}</style>

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
          <Link href="/kimjk/02" aria-label="의정보고 보기">
            <i className="fas fa-clipboard-list icon"></i>
            <span>의정보고</span>
          </Link>
          <Link href="/kimjk/03" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상</span>
          </Link>
          <Link href="/kimjk/04" className="active" aria-label="조례성과 보기">
            <i className="fas fa-scroll icon"></i>
            <span>조례성과</span>
          </Link>
        </nav>
      </header>

      <main>
        <div className="ordinance-top-image">
          <img src="/kimjk/assets/4pmain.jpg" alt="조례성과 메인 이미지" />
        </div>
        <div className="ordinance-container-v3">
          {/* 카테고리 1: 복지 */}
          <div className="ordinance-category">
            <div className="category-header welfare">
              <i className="fas fa-hands-helping"></i>
              <h2 className="category-title">복지 분야</h2>
              <span className="category-count">15건</span>
            </div>
            <div className="category-items">
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 장애인 전동보조기기 보험 가입 및 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 장애인가정 출산지원금 지급 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 외국인주민 및 다문화가족 지원 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 아동학대 예방 및 피해아동 보호에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 위기가구 발굴 및 지원에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 아동·청소년 상속채무 법률지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 여성의 경제활동 촉진과 경력단절 예방에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 사회복지사 등의 처우 및 지위 향상에 관한 조례
                  일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 갑질 행위 근절 및 피해자 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 장애인 대상 범죄예방 및 피해자 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 장애인 일자리 창출 및 장애인 고용촉진ㆍ직업 재활 지원
                  조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 발달장애인의 사회활동을 위한 보험 가입 및 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 홀몸 어르신 병원 동행 서비스 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 발달장애인 권리보장 및 지원에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 가사근로자 등의 고용개선 및 지원에 관한 조례안
                </p>
              </div>
            </div>
          </div>

          {/* 카테고리 2: 안전 */}
          <div className="ordinance-category">
            <div className="category-header safety">
              <i className="fas fa-shield-alt"></i>
              <h2 className="category-title">안전 분야</h2>
              <span className="category-count">5건</span>
            </div>
            <div className="category-items">
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 어린이놀이시설 관리에 관한 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 옥외행사의 안전관리에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 화재취약계층 주택용 소방시설 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 준초고층 건축물 재난관리 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">이천시 제설장비 관리 및 운영 조례안</p>
              </div>
            </div>
          </div>

          {/* 카테고리 3: 산업/문화 */}
          <div className="ordinance-category">
            <div className="category-header growth">
              <i className="fas fa-seedling"></i>
              <h2 className="category-title">산업·환경·문화 분야</h2>
              <span className="category-count">5건</span>
            </div>
            <div className="category-items">
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 1회용품 사용 저감 지원 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 양봉산업 육성 및 지원에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 음식관광 활성화에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 커피찌꺼기 순환경제 촉진 및 지원에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 도자기명장 선정 및 운영에 관한 조례 일부개정조례안
                </p>
              </div>
            </div>
          </div>

          {/* 카테고리 4: 행정/기타 */}
          <div className="ordinance-category" style={{ marginBottom: "40px" }}>
            <div className="category-header admin">
              <i className="fas fa-landmark"></i>
              <h2 className="category-title">행정·기타 분야</h2>
              <span className="category-count">9건</span>
            </div>
            <div className="category-items">
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시의회 의원 의정활동비·월정수당 및 여비지급에 관한 조례
                  일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시의회 국내외 지방의회 간 교류협력에 관한 조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시의회 공무원 복무 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시의회 공무원 복무 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">이천시의회 포상 조례 일부개정조례안</p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">이천시 장애인 체육진흥 조례안</p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 양성평등 기본 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 병역명문가 예우 및 지원에 관한 조례 일부개정조례안
                </p>
              </div>
              <div className="category-item">
                <div className="item-dot"></div>
                <p className="item-text">
                  이천시 백사 산수유나무 군락지 보호 및 육성에 관한
                  조례일부개정조례안
                </p>
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
