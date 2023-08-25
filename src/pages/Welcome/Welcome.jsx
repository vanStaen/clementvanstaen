import React, { useEffect, resetWindowInnerHeight } from "react";
import { observer } from "mobx-react";

import { RevolvingText } from "../../components/RevolvingText/RevolvingText";
import { MyLinks } from "./myLinks/MyLinks";

import vanStaenWhiteOpen from "../../img/vanStaenWhiteOpen.jpg";
import vanStaenWhiteClose from "../../img/vanStaenWhiteClose.jpg";

import "./Welcome.less";

export const Welcome = observer(() => {
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

  useEffect(() => {
    //TODO: preload the background images
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
      <div className="welcome" style={{ height: windowInnerHeight }}>
        {/*<RevolvingText />*/}
        <MyLinks />
        <div
          className="openeyes"
          style={{ height: windowInnerHeight }}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        ></div>
      </div>
      <div className="background" style={{ height: windowInnerHeight }}></div>
    </div>
  );
});
