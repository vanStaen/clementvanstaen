import React, { useEffect, useState } from "react";

import "./RevolvingText.less";

export const RevolvingText = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(
    window.innerHeight
  );
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const resetWindowInner = () => {
    setWindowInnerHeight(window.innerHeight);
    setWindowInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resetWindowInner);
    return () => {
      window.removeEventListener("resize", resetWindowInner);
    };
  }, [resetWindowInner]);

  let currentWord = 0;
  let lastWord = 0;
  let nextWord = 0;

  useEffect(() => {
    const words = document.getElementsByClassName("word");
    words[currentWord].style.opacity = 1;

    const changeWord = () => {
      words[currentWord].style.opacity = 0;
      words[currentWord].className = "word out";
      if (currentWord === 4) {
        currentWord = 0;
      } else {
        currentWord = currentWord + 1;
      }
      words[currentWord].style.opacity = 1;
      words[currentWord].className = "word behind";
      setTimeout(function () {
        words[currentWord].className = "word in";
      }, 80);
    };
    const refreshIntervalId = setInterval(changeWord, 3000);
    return () => {
      clearInterval(refreshIntervalId);
    };
  }, []);

  return (
    <div
      className="revolving__container"
      id="revolving__container"
      style={{
        bottom:
          windowInnerWidth > 670 ? "70px" : windowInnerHeight * 0.8 + "px",
        textAlign: windowInnerWidth > 670 ? "right" : "center",
        paddingRight: windowInnerWidth > 670 ? "20vw" : "0",
      }}
    >
      <div className="text">
        <p>I am a </p>&nbsp;
        <p className="words">
          <span className="word" style={{ opacity: 1 }}>
            Programmer
          </span>
          <span className="word" style={{ opacity: 0 }}>
            Musician
          </span>
          <span className="word" style={{ opacity: 0 }}>
            Boulderer
          </span>
          <span className="word" style={{ opacity: 0 }}>
            Woodworker
          </span>
          <span className="word" style={{ opacity: 0 }}>
            Photographer
          </span>
        </p>
      </div>
    </div>
  );
};
