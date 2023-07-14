import React from "react";
import { observer } from "mobx-react";

import { Buttons } from "./Buttons/Buttons";
import { cubeSliderStore } from "./cubeSliderStore";

export const CubeSlider = observer((props) => {
  const { pages } = props;

  return (
    <>
      <Buttons color="#6a6a6a" numPages={pages.length} />
      {pages[cubeSliderStore.pageShown]}
    </>
  );
});
