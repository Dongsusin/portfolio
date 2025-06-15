import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import createPages from "./data/pages";
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

  const pages = createPages(
    goToPage,
    isMobile,
    book,
    setCurrentIndex,
    setSlideDirection
  );

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
