import React from "react";

import { Buttons } from "./Buttons/Buttons";

export const CubeSlider = (props) => {
  const { pages } = props;

  return (
    <>
      <Buttons color="#6a6a6a" />
      {pages[1]}
    </>
  );
};
