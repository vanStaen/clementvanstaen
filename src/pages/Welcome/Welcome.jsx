import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { RevolvingText } from "../../components/RevolvingText/RevolvingText";
import { MyLinks } from "./myLinks/MyLinks";
import { isMobileCheck } from "../../helpers/checkMobileTablet";

import vanStaenWhiteOpen from "../../img/vanStaenWhiteOpen.jpg";
import vanStaenWhiteOpenMobile from "../../img/vanStaenWhiteOpenMobile.jpg";
import vanStaenWhiteClose from "../../img/vanStaenWhiteClose.jpg";
import vanStaenWhiteCloseMobile from "../../img/vanStaenWhiteCloseMobile.jpg";

import "./Welcome.less";


const THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY = 520;

export const Welcome = observer(() => {
  const [isLoading, setIsLoading] = useState(true)
  const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)

  const resizeHandler = () => {
    setWindowInnerHeight(window.innerHeight);
    const element = document.getElementById("container");
    if (isMobileCheck() || window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY) {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteCloseMobile})`);
      element.style.setProperty("--backgroundWhiteOpen", `url(${vanStaenWhiteOpenMobile})`);
    } else {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteClose})`);
      element.style.setProperty("--backgroundWhiteOpen", `url(${vanStaenWhiteOpen})`);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  const loadImages = async (imageClose, imageOpen) => {
    const isloadedClose = new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = imageClose;
      loadImg.onload = () => resolve(imageClose);
      loadImg.onerror = (err) => reject(err);
    });
    const isloadedOpen = new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = imageOpen;
      loadImg.onload = () => resolve(imageOpen);
      loadImg.onerror = (err) => reject(err);
    });
    await isloadedClose;
    await isloadedOpen;
    setIsLoading(false);
  };

  useEffect(() => {
    resizeHandler();
    if (isMobileCheck() || window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY) {
      loadImages(vanStaenWhiteCloseMobile, vanStaenWhiteOpenMobile);
    } else {
      loadImages(vanStaenWhiteClose, vanStaenWhiteOpen);
    }
  }, []);

  const handleOnMouseEnter = () => {
    const element = document.getElementById("container");
    console.log('here');
    if (isMobileCheck() || window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY) {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteOpenMobile})`);
    } else {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteOpen})`);
    }
  };

  const handleOnMouseLeave = () => {
    const element = document.getElementById("container");
    if (isMobileCheck() || window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY) {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteCloseMobile})`);
    } else {
      element.style.setProperty("--backgroundWhiteClose", `url(${vanStaenWhiteClose})`);
    }
  };

  return (
    <div className="welcome__container" id="container">
      <div className="welcome__welcome" style={{ height: windowInnerHeight }}>
        {/*<RevolvingText />*/}
        <MyLinks />
        <div
          className="welcome__openeyes"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
        </div>
      </div>
      {isLoading ? <div className="welcome__loader" style={{ height: windowInnerHeight }}>
        <LoadingOutlined
          spin
          className="welcome__imageLoading"
        />
        loading
      </div> :
        <div className="welcome__background"></div>}
    </div>
  );
});
