// components/ScrollHintArrow.jsx
import { useEffect, useRef, useState } from "react";
import "./ScrollHintArrow.css";

const ScrollHintArrow = () => {
  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el) return;

    const checkScroll = () => {
      if (el.scrollHeight > el.clientHeight) {
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
        setShowArrow(!atBottom);
      } else {
        setShowArrow(false);
      }
    };

    el.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div ref={containerRef}>
      {showArrow && <div className="scroll-hint-arrow">↓</div>}
    </div>
  );
};

export default ScrollHintArrow;
