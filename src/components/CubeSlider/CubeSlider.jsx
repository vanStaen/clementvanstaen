import React from "react";

import { Buttons } from './Buttons/Buttons';

export const CubeSlider = (props) => {
  const { pages } = props;

  return (<>
    <Buttons theme='dark'/>
    {pages[0]}
  </>);
};
