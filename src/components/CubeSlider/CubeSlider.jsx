import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { Buttons } from "./Buttons/Buttons";
import { cubeSliderStore } from "./cubeSliderStore";

import "./CubeSlider.less";

export const CubeSlider = observer((props) => {
  const { pages, defaultPage } = props;

  useEffect(() => {
    cubeSliderStore.setPagesLength(pages.length);
    cubeSliderStore.setPageShown(defaultPage ? defaultPage : 0);
  }, [pages]);

  return (
    <>
      <Buttons color="#6a6a6a" numPages={pages.length} />
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--left">
            {pages[cubeSliderStore.pagePrev]}
          </div>
          <div className="cube__face cube__face--front">
            {pages[cubeSliderStore.pageShown]}
          </div>
          <div className="cube__face cube__face--right">
            {pages[cubeSliderStore.pageNext]}
          </div>
        </div>
      </div>
    </>
  );
});
