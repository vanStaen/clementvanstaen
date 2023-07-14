import React, { useEffect } from "react";

import { cubeSliderStore } from "../cubeSliderStore";

import "./Buttons.less";

export const Buttons = (props) => {
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
      if (elementId === "arrowRight") {
        const nextPage = cubeSliderStore.pageShown + 1;
        if (nextPage > props.numPages - 1) {
          cubeSliderStore.setPageShown(0);
        } else {
          cubeSliderStore.setPageShown(nextPage);
        }
      } else if (elementId === "arrowLeft") {
        const prevPage = cubeSliderStore.pageShown - 1;
        if (prevPage < 0) {
          cubeSliderStore.setPageShown(props.numPages - 1);
        } else {
          cubeSliderStore.setPageShown(prevPage);
        }
      }
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
};
