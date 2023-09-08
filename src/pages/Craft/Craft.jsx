import React, { useState, useEffect } from "react";

import "./Craft.less";

export const Craft = () => {
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
    <div className="craft__container" style={{ height: windowInnerHeight }}>
      Craft
    </div>
  );
};
