import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react";

import { Buttons } from "./Buttons/Buttons";
import { cubeSliderStore } from "./cubeSliderStore";

import "./CubeSlider.less";

export const CubeSlider = observer((props) => {
  const { pages, defaultPageIndex } = props;
  const throttling = useRef(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (throttling.current === false) {
      throttling.current = true;
      if (isRightSwipe) {
        cubeSliderStore.showLeft();
      } else if (isLeftSwipe) {
        cubeSliderStore.showRight();
      }
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    cubeSliderStore.setPagesLength(pages.length);
    cubeSliderStore.setPageShown(defaultPageIndex ? defaultPageIndex : 0);
  }, [pages]);

  useEffect(() => {
    const element = document.getElementById("cubeContainer");
    element.style.setProperty("--cube-face-height", window.innerHeight);
  }, []);

  const resizeHandler = () => {
    const element = document.getElementById("cubeContainer");
    element.style.setProperty("--cube-face-height", window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return (
    <>
      <Buttons
        color={pages[cubeSliderStore.pageShown].arrowColor}
        numPages={pages.length}
      />
      <div
        className="cubeContainer"
        id="cubeContainer"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="cube">
          <div className="cube__face cube__face--left">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pagePrev].page}
            </div>
          </div>
          <div className="cube__face cube__face--front">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pageShown].page}
            </div>
          </div>
          <div className="cube__face cube__face--right">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pageNext].page}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
