import React from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";

export const Main = () => {
  const pages = [
    <div key="welcomePage">
      <Welcome />
    </div>,
    <div
      style={{
        backgroundColor: "Coral",
        width: "100vw",
        height: "100vh",
      }}
      key="placeholder1"
    >
      placeholder 1
    </div>,
    <div
      style={{
        backgroundColor: "DarkSlateGray",
        width: "100vw",
        height: "100vh",
      }}
      key="placeholder2"
    >
      placeholder 2
    </div>,
    <div
      style={{ backgroundColor: "Pink", width: "100vw", height: "100vh" }}
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
