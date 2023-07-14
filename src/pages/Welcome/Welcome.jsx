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
    new Image().src = vanStaenWhiteOpen;
    new Image().src = vanStaenWhiteClose;
  }, []);

  const handleOnMouseDown = () => {
    const element = document.getElementById("welcome__background");
    element.style.backgroundImage = `url(${vanStaenWhiteOpen})`;
    console.log("handleOnMouseDown");
  };

  const handleOnMouseUp = () => {
    const element = document.getElementById("welcome__background");
    element.style.backgroundImage = `url(${vanStaenWhiteClose})`;
    console.log("handleOnMouseUp");
  };

  return (
    <div className="container">
      <div className="welcome">
        <RevolvingText />
        <MyLinks />
        <div
          className="openeyes"
          onMouseEnter={handleOnMouseDown}
          onMouseLeave={handleOnMouseUp}
        ></div>
      </div>
      <div className="background" id="welcome__background"></div>
    </div>
  );
});
