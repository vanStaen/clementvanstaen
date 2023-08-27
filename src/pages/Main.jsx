import React, { useState, useEffect } from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";

export const Main = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)

  const resetWindowInnerHeight = () => {
    setWindowInnerHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", resetWindowInnerHeight);
    return () => {
      window.removeEventListener("resize", resetWindowInnerHeight);
    };
  }, [resetWindowInnerHeight]);

  const pages = [
    <div key="welcomePage">
      <Welcome />
    </div>,
    <div
      style={{
        backgroundColor: "Coral",
        width: "100vw",
        height: windowInnerHeight,
      }}
      key="placeholder1"
    >
      placeholder 1
    </div>,
    <div
      style={{
        backgroundColor: "DarkSlateGray",
        width: "100vw",
        height: windowInnerHeight,
      }}
      key="placeholder2"
    >
      placeholder 2
    </div>,
    <div
      style={{ backgroundColor: "Pink", width: "100vw", height: windowInnerHeight }}
      key="placeholder3"
    >
      placeholder 3
    </div>,
  ];

  return (
    <>
      <CubeSlider pages={pages} defaultPage={0} />
    </>
  );
};
