import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";

const App = () => {
  const book = useRef(); // ✅ FlipBook에 접근하기 위한 ref

  const pages = [
    {
      title: "포트폴리오",
      content: (
        <div className="intro-page">
          <img src="/profile.jpg" alt="프로필" className="profile-img" />
          <div className="info-text">
            <p>
              <strong>이름:</strong> 신동수
            </p>
            <p>
              <strong>나이:</strong> 24 (2002)
            </p>
            <p>
              <strong>성별:</strong> 남
            </p>
            <p>
              <strong>전화번호:</strong> 010-2201-5617
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "기술 스택",
      content: (
        <div className="skills-page">
          <table className="skills-table">
            <thead>
              <tr>
                <th>분류</th>
                <th>툴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>프론트엔드</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                  <img src="/테일윈드.png" alt="TailwindCSS" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                </td>
              </tr>
              <tr>
                <td>개발 환경</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                  />
                  <img
                    src="https://vitejs.dev/logo.svg"
                    alt="Vite"
                    style={{ background: "#fff", borderRadius: "4px" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                  />
                </td>
              </tr>
              <tr>
                <td>협업</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  <img src="/디스코드.jpeg" alt="Discord" />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                    alt="Notion"
                  />
                </td>
              </tr>
              <tr>
                <td>기타</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                  />
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    alt="Unity"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "개인 프로젝트",
      content: (
        <div className="project-page">
          <img src="/pokedex.gif" alt="" />
          <div className="project-item">
            <h3>포켓몬 API 도감 (Pokedex)</h3>
            <p>
              -<a href="https://github.com/Dongsusin/pokedex">GitHub</a>
            </p>
            <p>
              -
              <a href="https://scintillating-beignet-3bd5f7.netlify.app/">
                배포사이트
              </a>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page">
          <div className="project-item">
            <h3>검색 기능</h3>
            <p>포켓몬의 이름을 검색창에 입력해서 해당 포켓몬 필터링</p>
            <h3>타입/세대/즐겨찾기 기능</h3>
            <p>
              타입 필터링은 2개까지 선택할수있으면 선택된 타입을 포함하고있는
              포켓몬을 필터링, 세대별 필터링은 각 세대에따라 번호범위를 주고
              해당 범위의 포켓몬을 필터링, 즐겨찾기는 즐겨찾기를 추가한 포켓몬만
              필터링
            </p>
            <h3>페이지 네이션</h3>
            <p>1페이지에 30마리씩 나눠서 전체 포켓몬 리스트를 grid로 렌더링</p>
            <h3>상세페이지</h3>
            <p>
              포켓몬 카드 클릭시 상세 페이지로 이동하며 상세페이지에는
              스탯,진화정보등을 추가로 보여줌
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "개인 프로젝트",
      content: (
        <div className="project-page">
          <img src="/여행웹.png" alt="" />
          <div className="project-item">
            <h3>여행 웹사이트</h3>
            <p>
              -<a href="https://github.com/Dongsusin/travel-globe">GitHub</a>
            </p>
            <p>
              -
              <a href="https://bespoke-lamington-ba8b2f.netlify.app/">
                배포사이트
              </a>
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (book.current) book.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    if (book.current) book.current.pageFlip().flipPrev();
  };

  return (
    <div className="portfolio-container">
      <div className="book-container">
        <button className="nav-button left" onClick={prevPage}>
          ◀
        </button>
        <HTMLFlipBook
          width={600}
          height={800}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1536}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          ref={book} // ✅ ref 연결
          className="flip-book"
        >
          {pages.map((page, index) => (
            <div className="page" key={index}>
              <h2>{page.title}</h2>
              <p>{page.content}</p>
              <div className="page-number">{index + 1}</div>
            </div>
          ))}
        </HTMLFlipBook>
        <button className="nav-button right" onClick={nextPage}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default App;
