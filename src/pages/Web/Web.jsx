import React, { useState, useEffect } from "react";

import "./Web.less";

export const Web = () => {
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
    <div className="web__container" style={{ minHeight: windowInnerHeight }}>
      <div className="title">Web Projects</div>
      <div className="fourOFour">comming up next</div>
    </div>
  );
};
