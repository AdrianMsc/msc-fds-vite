import { useEffect, useRef, useState } from "react";

const MscAlphabeticPager = () => {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0-9"];
  const pagerContainerRef = useRef<HTMLDivElement | null>(null);
  const pagerListRef = useRef<HTMLUListElement | null>(null);
  const [scrollBreakpoint, setScrollBreakpoint] = useState(750);

  useEffect(() => {
    const updateScrollBreakpoint = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024 && windowWidth >= 768) {
        setScrollBreakpoint(550);
      } else if (windowWidth <= 768 && windowWidth >= 640) {
        setScrollBreakpoint(700);
      } else if (windowWidth <= 640) {
        setScrollBreakpoint(750);
      }
    };

    updateScrollBreakpoint();
    window.addEventListener("resize", updateScrollBreakpoint);

    return () => {
      window.removeEventListener("resize", updateScrollBreakpoint);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pagerList = pagerListRef.current;
      const pagerContainer = pagerContainerRef.current;

      if (pagerList && pagerContainer) {
        if (pagerList.scrollLeft >= scrollBreakpoint) {
          pagerContainer.classList.remove("msc-pager-container-after");
        } else if (pagerList.scrollLeft > 1) {
          pagerContainer.classList.add("msc-pager-container-before");
          pagerContainer.classList.add("msc-pager-container-after");
        } else if (pagerList.scrollLeft < 1) {
          pagerContainer.classList.remove("msc-pager-container-before");
        }
      }
    };

    const pagerList = pagerListRef.current;
    if (pagerList) {
      pagerList.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (pagerList) {
        pagerList.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollBreakpoint]);

  return (
    <div
      id="pagerContainer"
      className="msc-pager-container msc-pager-container-after my-5"
      ref={pagerContainerRef}
    >
      <ul id="pagerList" className="msc-pager-list" ref={pagerListRef}>
        {alphabet.map((letter, index) => (
          <li key={index}>
            <button
              className={`msc-pager-item${
                letter === "0-9" ? " msc-pager-last-item" : ""
              }`}
            >
              {letter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MscAlphabeticPager;
