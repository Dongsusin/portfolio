import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import emailjs from "emailjs-com";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlider from "./ProjectSlider";
import "./App.css";

const App = () => {
  const book = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 426);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!showIntro && !isMobile) {
      setTimeout(() => book.current?.pageFlip().flipNext(), 1500);
    }
  }, [showIntro, isMobile]);

  useEffect(() => {
    if (isMobile) setShowIntro(false);
  }, [isMobile]);

  const goToPage = (pageNumber) => {
    if (isMobile) {
      setCurrentIndex(pageNumber);
    } else {
      book.current?.pageFlip().flip(pageNumber);
    }
  };

  const pages = [
    {
      title: "",
      content: (
        <div className="intro-page-book">
          <h1>포트폴리오</h1>
          <button
            onClick={() => {
              isMobile
                ? (setSlideDirection("right"),
                  setCurrentIndex((prev) => prev + 1))
                : book.current?.pageFlip().flipNext();
            }}
          >
            시작하기
          </button>
        </div>
      ),
    },
    {
      title: "포트폴리오",
      content: (
        <div className="intro-page">
          <img src="/profile.jpg" alt="프로필" className="profile-img" />
          <div className="info-text glow-text">
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
            <p>
              <strong>이메일:</strong> auroratime020715@gmail.com
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "기술 스택",
      content: (
        <div className="skills-page glow-text">
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
                    title="HTNL5"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    title="CSS3"
                  />
                  <img src="/테일윈드.png" alt="TailwindCSS" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    title="JavaScript"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    title="React"
                  />
                </td>
              </tr>
              <tr>
                <td>개발 기술</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    title="VS Code"
                  />
                  <img
                    src="https://vitejs.dev/logo.svg"
                    alt="Vite"
                    title="Vite"
                    style={{ background: "#fff", borderRadius: "4px" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    title="Vue.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    title="Next.js"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                    alt="Three.js"
                    title="Three.js"
                  />
                  <img src="/EmailJS.png" title="Three.js" alt="/EmailJS" />
                  <img src="/node-js.svg" title="Node.js" alt="Node.js" />
                </td>
              </tr>
              <tr>
                <td>협업</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    title="Git"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    title="GitHub"
                  />
                  <img src="/디스코드.jpeg" title="디스코드" alt="Discord" />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                    alt="Notion"
                    title="Notion"
                  />
                </td>
              </tr>
              <tr>
                <td>기타</td>
                <td className="tools">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                    title="Figma"
                  />
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                    title="Netlify"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    alt="Unity"
                    title="Unity"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                    title="C#"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "교육및 자격증",
      content: (
        <div className="education-page glow-text">
          <h3>멋쟁이 사자처럼 프론트엔드 부트캠프</h3>
          <p>2025.02.05~2025.08.08</p>
          <p>
            Html,Css,JS,React를 이용해서 다양한 프로젝트를 해보면서 프론트엔드에
            대하여 자세히 알수있었고 팀프로젝트를 해보면서 협업경험을
            쌓을수있었습니다.
          </p>
          <h3>자격증</h3>
          <p>정보치리기능사(2019.03)</p>
          <p>컴퓨터활용능력 2급(2020.06)</p>
          <p>전자기기기능사(2020.09)</p>
          <p>제한무선통신사(2020.10)</p>
          <p>토익(748점)</p>
        </div>
      ),
    },
    {
      title: "목차",
      content: (
        <div className="index-page">
          <h3>프로젝트 목록</h3>
          <ul className="toc-list glow-text">
            <li>
              포켓몬 도감 프로젝트(개인)
              <button onClick={() => goToPage(5)}>이동</button>
            </li>
            <li>
              여행 웹사이트(개인)
              <button onClick={() => goToPage(7)}>이동</button>
            </li>
            <li>
              데스크탑 프로젝트(개인)
              <button onClick={() => goToPage(9)}>이동</button>
            </li>
            <li>
              UI/UX 프로젝트(팀)
              <button onClick={() => goToPage(11)}>이동</button>
            </li>
            <li>
              JS 프로젝트(팀)
              <button onClick={() => goToPage(13)}>이동</button>
            </li>
            <li>
              2048(유니티)
              <button onClick={() => goToPage(15)}>이동</button>
            </li>
            <li>
              벽돌깨기(유니티)
              <button onClick={() => goToPage(16)}>이동</button>
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "개인 프로젝트",
      content: (
        <div className="project-page">
          <ProjectSlider
            images={[
              "/pokedex.gif",
              "/pokedex1.png",
              "/pokedex2.png",
              "/pokedex3.png",
              "/pokedex4.png",
            ]}
          />
          <div className="project-item glow-text">
            <h3>포켓몬 API 도감</h3>
            <div className="project-title">
              <a href="https://scintillating-beignet-3bd5f7.netlify.app/">
                배포 사이트
              </a>
              <a href="https://github.com/Dongsusin/pokedex">GitHub</a>
            </div>
            <div className="project-Skill">
              <h3>사용 API</h3>
              <div className="api-container">
                <span className="badge">PokeAPI</span>
              </div>
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  React
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JS"
                  />
                  JavaScript
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GitHub
                </span>
                <span className="badge">
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  Netlify
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page glow-text">
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
          <ProjectSlider
            images={["/여행웹1.png", "/여행웹.png", "/여행웹2.gif"]}
          />
          <div className="project-item glow-text">
            <h3>여행 웹사이트</h3>
            <div className="project-title">
              <a href="https://bespoke-lamington-ba8b2f.netlify.app/">
                배포 사이트
              </a>
              <a href="https://github.com/Dongsusin/travel-globe">GitHub</a>
            </div>
            <div className="project-Skill">
              <h3>사용 API</h3>
              <div className="api-container">
                <span className="badge">OpenWeather API</span>
              </div>
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  React
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  JavaScript
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                    alt="Three.js"
                  />
                  Three.js
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GitHub
                </span>
                <span className="badge">
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  Netlify
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                    alt="Axios"
                  />
                  Axios
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page glow-text">
          <div className="project-item">
            <h3>3D 지구본 렌더링</h3>
            <p>
              Three.js와 @react-three/fiber를 활용하여 회전 가능한 3D 지구본을
              렌더링하고, 별(star) 배경을 통해 시각적으로 몰입감 있는 UI 제공
            </p>

            <h3>여행지 위치 표시</h3>
            <p>
              위도/경도 정보를 기반으로 여행지를 지구본 위에 마커로 표시하며,
              위치 계산을 통해 3D 좌표에 정확히 배치
            </p>

            <h3>마커 Hover & Click 인터랙션</h3>
            <p>
              마커에 마우스를 올리면 여행지 이름을 툴팁으로 보여주고, 클릭 시
              해당 여행지의 상세 정보 창으로 이동
            </p>

            <h3>여행지 상세 정보</h3>
            <p>
              선택된 여행지에 대해 날씨, 이미지, 설명, 환율 등 다양한 정보를
              API를 통해 불러와 표시
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "개인 프로젝트",
      content: (
        <div className="project-page">
          <ProjectSlider
            images={[
              "/데스크탑.png",
              "/데스크탑1.png",
              "/데스크탑2.png",
              "/데스크탑3.png",
              "/데스크탑4.png",
              "/데스크탑5.png",
            ]}
          />
          <div className="project-item glow-text">
            <h3>PC프로젝트</h3>
            <div className="project-title">
              <a href="https://jovial-alpaca-3d63f1.netlify.app/">
                배포 사이트
              </a>
              <a href="https://github.com/Dongsusin/DeskTop">GitHub</a>
            </div>
            <div className="project-Skill">
              <h3>사용 API</h3>
              <div className="api-container">
                <span className="badge">OpenWeather API</span>
                <span className="badge">navigator.geolocation</span>
              </div>
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  React
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  JavaScript
                </span>
                <span className="badge">
                  <img src="react-leaflet.png" alt="react-leaflet" />
                  leaflet
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GitHub
                </span>
                <span className="badge">
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  Netlify
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page glow-text">
          <div className="project-item">
            <h3>메인 화면 UI</h3>
            <p>
              바탕화면에 폴더와 앱 아이콘을 배치해 실제 운영체제 데스크탑처럼
              구성하며, 하단에는 작업 표시줄(하단바)과 현재 날짜를 확인할 수
              있는 달력 위젯을 구현
            </p>

            <h3>계산기 앱</h3>
            <p>
              사칙연산이 가능한 계산기를 제공하며, 사용자가 입력한 계산 내역을
              히스토리로 저장하여 확인할 수 있음
            </p>

            <h3>날씨 앱</h3>
            <p>
              OpenWeatherApi를 이용해서 현재위치에대한 날씨정보를 보여줍니다.
            </p>

            <h3>지도 앱</h3>
            <p>
              지도에 마커를 표시하고, 위치 검색 기능을 통해 원하는 위치를 탐색할
              수 있음.
            </p>

            <h3>메모장</h3>
            <p>
              ToDoList느낌으로 메모를 추가및 삭제할수있으며 메모 작성중에는
              현재작성중인 메오의 글자수를 보여줍니다.
            </p>

            <h3>그림판</h3>
            <p>
              Canvas를 이용해서 다양한 방식으로 그림을 그리고 해당 그림을
              png파일로 다운받을수있습니다.
            </p>

            <h3>다양한 게임앱</h3>
            <p>
              테트리스,반응속도 테스트,틱택톡등 다양한게임을 React,JavaScript를
              이용해서 구현해봤으며 테트리스,턴제카드게임등 좀더 복잡하고 어려운
              게임도 구현해봤습니다.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "팀 프로젝트",
      content: (
        <div className="project-page">
          <ProjectSlider
            images={[
              "/uxui프로젝트.png",
              "/uxui프로젝트1.png",
              "/uxui프로젝트2.png",
              "/uxui프로젝트3.png",
              "/uxui프로젝트4.png",
              "/uxui프로젝트5.png",
              "/uxui프로젝트6.png",
            ]}
          />
          <div className="project-item glow-text">
            <h3>UI/UX프로젝트</h3>
            <div className="project-title">
              <a href="https://9rodigital-willie.netlify.app/">배포 사이트</a>
              <a href="https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital">
                GitHub
              </a>
            </div>
            <div className="project-Skill">
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                  />
                  Html
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                  Css
                </span>
                <span className="badge">
                  <img src="/테일윈드.png" alt="TailwindCSS" />
                  TailWind
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  Java
                </span>
                <span className="badge">
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  Netlify
                </span>
                <span className="badge">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                    alt="Notion"
                  />
                  Notion
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GigHub
                </span>
                <span className="badge">
                  <img src="/디스코드.jpeg" alt="Discord" />
                  DisCord
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                  />
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page glow-text">
          <div className="project-item">
            <h3>홈 화면</h3>
            <p>
              추천 도서, 인기 도서, 신간 도서 등 다양한 카테고리별 도서 큐레이션
            </p>

            <h3>도서 검색</h3>
            <p>제목, 저자, 출판사 등 다양한 조건으로 도서 검색 기능</p>

            <h3>도서 상세 페이지</h3>
            <p>도서 정보, 리뷰, 관련 도서 추천</p>

            <h3>내 서재</h3>
            <p>사용자가 읽은 책, 읽고 있는 책, 찜한 책 관리</p>

            <h3>반응형 디자인</h3>
            <p>모바일, 태블릿, 데스크톱 환경에 최적화된 UI</p>

            <h3>모듈식 레이아웃</h3>
            <p>
              헤더, 푸터, 버튼, 타이틀 등 레이아웃 요소를 컴포넌트 형식으로 제작
            </p>

            <h3>Tailwind 기반 디자인</h3>
            <p>
              일관된 디자인 시스템으로 빠른 스타일링이 가능하며, 커스터마이징이
              용이
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "팀 프로젝트",
      content: (
        <div className="project-page">
          <ProjectSlider
            images={[
              "/JS프로젝트.png",
              "/JS프로젝트1.png",
              "/JS프로젝트2.png",
              "/JS프로젝트3.png",
              "/JS프로젝트4.png",
              "/JS프로젝트5.png",
              "/JS프로젝트6.png",
            ]}
          />
          <div className="project-item glow-text">
            <h3>JS프로젝트</h3>
            <div className="project-title">
              <a href="https://3lines-2048.netlify.app/">배포 사이트</a>
              <a href="https://github.com/FRONTENDBOOTCAMP-13th/JS-03-2048-in-3lines">
                GitHub
              </a>
            </div>
            <div className="project-Skill">
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                  />
                  Html
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                  Css
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                  />
                  TypeScript
                </span>
                <span className="badge">
                  <img
                    src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                    alt="Netlify"
                  />
                  Netlify
                </span>
                <span className="badge">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                    alt="Notion"
                  />
                  Notion
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GigHub
                </span>
                <span className="badge">
                  <img src="/디스코드.jpeg" alt="Discord" />
                  DisCord
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                  />
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "주요 기능",
      content: (
        <div className="project-page glow-text">
          <div className="project-item">
            <h3>게임 시작</h3>
            <p>게임시작시 2또는 4의 값을 가진 타일 2개를 랜덤위치에 생성</p>

            <h3>타일 이동및 병합</h3>
            <p>
              방향키를 이용해서 타일을 이동하며 같은값을 가진 타일이 만나면
              현재값*2로 병합처리
            </p>

            <h3>점수 시스템</h3>
            <p>
              타일병합시 현재값에따라 점수가 증가하며 로컬로 현재점수를 저장하며
              최고점수와 현재점수를 비교해서 최고점수를 저장및갱신
            </p>

            <h3>사운드 효과</h3>
            <p>
              게임시작시 bgm,클릭시 터치사운드 등을 재생하며 사운드바를 이용해서
              음량을 조절
            </p>

            <h3>게임 종료 처리</h3>
            <p>
              이동및 병합후 이동이 가능한지 확인후 이동이 불가능하면
              게임종료처리후 게임종료표시
            </p>

            <h3>모바일 대응</h3>
            <p>스크린 크기에따라 css디자인이 변하며 반응형으로 디자인</p>

            <h3>게임 보드 크기변경</h3>
            <p>
              게임 보드 크기 변경으로 3*3,4*4,5*5 형식으로 보드의 크기를 변경함
            </p>

            <h3>타임어택모드</h3>
            <p>
              일정시간동안 기록을 내는 모드로 상단에 프로그래스바 형식으로
              타이머 표시
            </p>

            <h3>하드 모드</h3>
            <p>
              게임시작시 이동이 불가능한 타일을 1개 추가로 생성해서 플레이하는
              모드
            </p>

            <h3>AI대전 모드</h3>
            <p>TS를 이용해서 만든AI와 점수를 대결하는 모드</p>
          </div>
        </div>
      ),
    },
    {
      title: "유니티 프로젝트",
      content: (
        <div className="project-page">
          <img
            src="/app/unity2048.png"
            alt="unity2048"
            className="project-image"
          />
          <div className="project-item glow-text">
            <h3>유니티 2048앱</h3>
            <div className="project-title">
              <a href="/app/2048.apk" download>
                앱 다운로드
              </a>
              <a href="https://github.com/Dongsusin/unity2048">GitHub</a>
            </div>
            <div className="project-Skill">
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    alt="Unity"
                  />
                  Unity
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                  />
                  C#
                </span>

                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GigHub
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "유니티 프로젝트",
      content: (
        <div className="project-page">
          <img
            src="/app/unitySwiprBreakOut.png"
            alt="unitySwiprBreakOut"
            className="project-image"
          />
          <div className="project-item glow-text">
            <h3>유니티 벽돌깨기앱</h3>
            <div className="project-title">
              <a href="/app/SwiprBreakOut.apk" download>
                앱 다운로드
              </a>
              <a href="https://github.com/Dongsusin/unitySwipe-Breakout">
                GitHub
              </a>
            </div>
            <div className="project-Skill">
              <h3>사용 기술</h3>
              <div className="badge-container">
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    alt="Unity"
                  />
                  Unity
                </span>
                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                  />
                  C#
                </span>

                <span className="badge">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  GigHub
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "메일 보내기",
      content: (
        <div className="contact-page glow-text">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_6icxgwz",
                  "template_eh915g6",
                  e.target,
                  "zWGdm7RB-SiluN_O1"
                )
                .then(() => alert("메일이 성공적으로 전송되었습니다."))
                .catch(() => alert("메일 전송에 실패했습니다."));
              e.target.reset();
            }}
          >
            <div className="form-group">
              <label>제목</label>
              <input type="text" name="subject" required />
            </div>
            <div className="form-group">
              <label>내용</label>
              <textarea name="message" required></textarea>
            </div>
            <button type="submit">보내기</button>
          </form>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    isMobile
      ? currentIndex < pages.length - 1 &&
        (setSlideDirection("right"), setCurrentIndex((prev) => prev + 1))
      : book.current?.pageFlip().flipNext();
  };

  const prevPage = () => {
    isMobile
      ? currentIndex > 0 &&
        (setSlideDirection("left"), setCurrentIndex((prev) => prev - 1))
      : book.current?.pageFlip().flipPrev();
  };

  return (
    <div className="portfolio-container">
      {showIntro ? (
        <div className="intro-screen">
          <h1>포트폴리오</h1>
          <button className="start-button" onClick={() => setShowIntro(false)}>
            시작하기
          </button>
        </div>
      ) : (
        <div className="book-container">
          <button className="nav-button left" onClick={prevPage}>
            ◀
          </button>

          {isMobile ? (
            <div className="mobile-layout">
              <button className="nav-button left" onClick={prevPage}>
                ◀
              </button>
              <div
                className={`page mobile-page ${
                  slideDirection === "right"
                    ? "slide-right"
                    : slideDirection === "left"
                    ? "slide-left"
                    : ""
                }`}
              >
                <h2>{pages[currentIndex].title}</h2>
                <div>{pages[currentIndex].content}</div>
                <div className="page-number">{currentIndex + 1}</div>
              </div>
              <button className="nav-button right" onClick={nextPage}>
                ▶
              </button>
            </div>
          ) : (
            <HTMLFlipBook
              width={768}
              height={800}
              size="stretch"
              minWidth={500}
              maxWidth={1600}
              minHeight={400}
              maxHeight={1536}
              showCover={true}
              mobileScrollSupport={true}
              ref={book}
              className="flip-book"
            >
              {pages.map((page, index) => (
                <div
                  className={`page ${index === 0 ? "intro-cover-page" : ""}`}
                  key={index}
                >
                  {index !== 0 && <h2>{page.title}</h2>}
                  <div>{page.content}</div>
                  {index !== 0 && <div className="page-number">{index}</div>}
                </div>
              ))}
            </HTMLFlipBook>
          )}

          <button className="nav-button right" onClick={nextPage}>
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
