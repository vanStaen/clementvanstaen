import React, { useState, useEffect } from "react";

import "./Music.less";

export const Music = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(
    window.innerHeight
  );

  const resetWindowInnerHeight = () => {
    setWindowInnerHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resetWindowInnerHeight);
    return () => {
      window.removeEventListener("resize", resetWindowInnerHeight);
    };
  }, [resetWindowInnerHeight]);

  return (
    <div className="music__container" style={{ minHeight: windowInnerHeight }}>
      <div className="title">Music</div>
    </div>
  );
};
