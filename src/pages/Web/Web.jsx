import React, { useState, useEffect } from "react";

import { isMobileCheck } from "../../helpers/checkMobileTablet";

import rewaer_desktop_1 from "./img/rewaer_desktop_1.png";
import rewaer_desktop_2 from "./img/rewaer_desktop_2.png";
import rewaer_desktop_3 from "./img/rewaer_desktop_3.png";
import rewaer_mobile_1 from "./img/rewaer_mobile_1.jpg";
import rewaer_mobile_2 from "./img/rewaer_mobile_2.jpg";
import rewaer_mobile_3 from "./img/rewaer_mobile_3.jpg";

import kinkograph_desktop_1 from "./img/kinkograph_desktop_1.png";
import kinkograph_desktop_2 from "./img/kinkograph_desktop_2.png";
import kinkograph_desktop_3 from "./img/kinkograph_desktop_3.png";
import kinkograph_mobile_1 from "./img/kinkograph_mobile_1.jpg";
import kinkograph_mobile_2 from "./img/kinkograph_mobile_2.jpg";
import kinkograph_mobile_3 from "./img/kinkograph_mobile_3.jpg";

const THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY = 670;

import "./Web.less";

export const Web = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(
    window.innerHeight
  );
  const [showMobileImages, setShowMobileImages] = useState(
    isMobileCheck() ||
      window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY
  );

  const resetWindowInnerHeight = () => {
    setWindowInnerHeight(window.innerHeight);
    setShowMobileImages(
      isMobileCheck() ||
        window.innerWidth < THRESHOLD_IN_PX_BEFORE_SHOWING_MOBILE_GALLERY
    );
  };

  useEffect(() => {
    window.addEventListener("resize", resetWindowInnerHeight);
    return () => {
      window.removeEventListener("resize", resetWindowInnerHeight);
    };
  }, [resetWindowInnerHeight]);

  return (
    <div className="web__container" style={{ minHeight: windowInnerHeight }}>
      <div className="title">Web Projects</div>
      <div className="fourOFour">Comming soon</div>
      {/*
      <div className="web__projectListContainer">
        <div className="web__projectList web__projectListSelected">
          <div
            className="web__badge"
            style={{ backgroundColor: "#6d917e" }}
          ></div>
          rewaer
        </div>
        <div className="web__projectListSpacer"> | </div>
        <div className="web__projectList">
          <div
            className="web__badge"
            style={{ backgroundColor: "black" }}
          ></div>
          kinkograph
        </div>
        <div className="web__projectListSpacer"> | </div>
        <div className="web__projectList">
          {" "}
          <div
            className="web__badge"
            style={{ backgroundColor: "#d9d6cb" }}
          ></div>
          todogether
        </div>
        <div className="web__projectDesc">
          todo: Description of selected project
        </div>
      </div>
      <div className="web__screenshots">
        <img
          className="web__screenshot web__screenshot1"
          src={showMobileImages ? rewaer_mobile_1 : rewaer_desktop_1}
        />
        <img
          className="web__screenshot web__screenshot2"
          src={showMobileImages ? rewaer_mobile_2 : rewaer_desktop_2}
        />
        <img
          className="web__screenshot web__screenshot3"
          src={showMobileImages ? rewaer_mobile_3 : rewaer_desktop_3}
        />
  </div>*/}
    </div>
  );
};
