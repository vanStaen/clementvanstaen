import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { RevolvingText } from "../../components/RevolvingText/RevolvingText";
import { MyLinks } from "./myLinks/MyLinks";

import vanStaenWhiteOpen from "../../img/vanStaenWhiteOpen.jpg";
import vanStaenWhiteClose from "../../img/vanStaenWhiteClose.jpg";

import "./Welcome.less";

export const Welcome = observer(() => {
  useEffect(() => {
    //preload the background images
  }, []);

  const handleOnMouseEnter = () => {
    const element = document.getElementById("container");
    element.style.setProperty(
      "--backgroundWhiteMan",
      `url(${vanStaenWhiteOpen})`
    );
  };

  const handleOnMouseLeave = () => {
    const element = document.getElementById("container");
    element.style.setProperty(
      "--backgroundWhiteMan",
      `url(${vanStaenWhiteClose})`
    );
  };

  return (
    <div className="container" id="container">
      <div className="welcome">
        <RevolvingText />
        <MyLinks />
        <div
          className="openeyes"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        ></div>
      </div>
      <div className="background"></div>
    </div>
  );
});
