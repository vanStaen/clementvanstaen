import React from "react";
import AwesomeSlider from "react-awesome-slider";
import coreStyles from "react-awesome-slider/src/core/styles.scss";
import animationStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";

import { Welcome } from "./Welcome/Welcome";

export const Main = () => {
  return (
    <>
      <AwesomeSlider
        animation="cubeAnimation"
        cssModule={[coreStyles, animationStyles]}
        fillParent={true}
        bullets={false}
      >
        <div key="welcomePage">
          <Welcome />
        </div>
        <div style={{ backgroundColor: "Coral" }} key="placeholder1">
          placeholder 1
        </div>
        <div style={{ backgroundColor: "DarkSlateGray" }} key="placeholder2">
          placeholder 2
        </div>
        <div style={{ backgroundColor: "Pink" }} key="placeholder3">
          placeholder 3
        </div>
      </AwesomeSlider>
    </>
  );
};