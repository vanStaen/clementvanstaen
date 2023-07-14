import React, { useEffect } from "react";
import { observer } from "mobx-react";

import "./Buttons.less";

export const Buttons = observer((props) => {
  useEffect(() => {
    if (props.color) {
      document
        .querySelector(":root")
        .style.setProperty("--organic-arrow-color", props.color);
    }
  }, []);

  const handleControlClick = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.add("active");
    setTimeout(() => {
      element.classList.remove("active");
    }, 500);
  };

  return (
    <>
      <div className="controls">
        <div className="next" onClick={() => handleControlClick("arrowRight")}>
          <span id="arrowRight" className="arrowRight" />
        </div>
        <div className="prev" onClick={() => handleControlClick("arrowLeft")}>
          <span id="arrowLeft" className="arrowLeft" />
        </div>
      </div>
    </>
  );
});
