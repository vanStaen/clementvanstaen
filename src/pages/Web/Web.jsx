import React, { useState, useEffect } from "react";

import rewaer_desktop_1 from "./img/rewaer_desktop_1.png";
import rewaer_desktop_2 from "./img/rewaer_desktop_2.png";
import rewaer_desktop_3 from "./img/rewaer_desktop_3.png";

import "./Web.less";

export const Web = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(
    window.innerHeight
  );

  const resetWindowInnerHeight = () => {
    setWindowInnerHeight(window.innerHeight);
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
      <div className="web__projectListContainer">
        <div className="web__projectList web__projectListSelected">rewaer</div>
        <div className="web__projectListSpacer"> | </div>
        <div className="web__projectList">kinkograph</div>
        <div className="web__projectListSpacer"> | </div>
        <div className="web__projectList">todogether</div>
        <div className="web__projectDesc">
          todo: Description of selected project
        </div>
      </div>
      <div className="web__screenshots">
        <img
          className="web__screenshot web__screenshot1"
          src={rewaer_desktop_1}
        />
        <img
          className="web__screenshot web__screenshot2"
          src={rewaer_desktop_2}
        />
        <img
          className="web__screenshot web__screenshot3"
          src={rewaer_desktop_3}
        />
      </div>
    </div>
  );
};
