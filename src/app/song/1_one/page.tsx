import Link from "next/link";

export default function SongOne() {
  return (
    <div className="h-full">
      <main>
        <div className="content-section" style={{ marginBottom: "-20px" }}>
          <img
            src="/song/assets/1p_0.jpg"
            alt="송석준 의원 소개"
            width="100%"
            loading="eager"
            style={{ borderRadius: "15px" }}
          />
        </div>

        <div className="career-profile-card">
          <div className="career-content">
            <div className="section-title">학력 사항</div>
            <div className="section">
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">
                  미국 미주리대 경제학과 (경제학 박사, 2002~2005)
                </div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">
                  서울대 행정대학원 정책학 전공 (행정학 석사)
                </div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">
                  서울대 국제경제학과 졸업 (경제학 학사)
                </div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">서울 인창고등학교 졸업 (29회)</div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">이천 경남종고 재학</div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">이천 경남중학교 졸업 (23회)</div>
              </div>
              <div className="list-item">
                <div className="dot"></div>
                <div className="text">송곡초등학교 졸업 (32회)</div>
              </div>
            </div>

            <div className="section-title">주요 경력</div>
            <div className="section">
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">국민의힘 이천시 국회의원 (3선)</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">국회 법제사법위원회 위원</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">국회 미래국토인프라혁신포럼 공동대표</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">한강사랑포럼 공동대표</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">국회 어린이안전포럼 대표</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">호남동행 국회의원(제2지역구 군산시)</div>
              </div>
              <div className="list-item">
                <span className="tag-current">현</span>
                <div className="text">미주리대학교 재한 총동문회 회장</div>
              </div>

              <hr
                style={{
                  border: "0",
                  borderTop: "1px dashed #eee",
                  margin: "0",
                }}
              />
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국민의힘 중앙위원회 의장</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국회 정무위원회 위원</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국회예산결산특별위원회 위원</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국민의힘 경기도당 위원장</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국민의힘 정책위원회 부의장</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">국회 국토교통위원회 국민의힘 간사</div>
              </div>

              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">
                  국민의힘 부동산시장 정상화 특위 위원장
                </div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">서울지방국토관리청장</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">제34회 행정고시(재경직) 합격</div>
              </div>
              <div className="list-item">
                <span className="tag-past">전</span>
                <div className="text">해병대 정훈장교(학사21기) 군복무</div>
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

      <header>
        <nav>
          <Link href="/song" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/song/1_one" className="active" aria-label="송석준 소개">
            <i className="fas fa-user icon"></i>
            <span>송석준</span>
          </Link>
          <Link href="/song/2_two" aria-label="의정보고 보기">
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
