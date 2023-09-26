import React, { useState, useEffect } from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";
import { Craft } from "./Craft/Craft";
import { Music } from "./Music/Music";
import { Web } from "./Web/Web";

export const Main = () => {
  const pages = [
    {
      arrowColor: "rgba(200,200,200,1)",
      page: (
        <div key="welcomePage">
          <Welcome />
        </div>
      ),
    },
    {
      arrowColor: "rgba(255,255,255,1)",
      page: (
        <div key="musicPage">
          <Music />
        </div>
      ),
    },
    {
      arrowColor: "rgba(150,150,150,1)",
      page: (
        <div key="craftPage">
          <Craft />
        </div>
      ),
    },
    {
      arrowColor: "rgba(100,100,100,1)",
      page: (
        <div key="webPage">
          <Web />
        </div>
      ),
    },
  ];

  return (
    <>
      <CubeSlider pages={pages} defaultPage={0} />
    </>
  );
};
