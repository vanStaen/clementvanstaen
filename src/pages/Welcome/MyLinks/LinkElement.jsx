import React from "react";
import { observer } from "mobx-react";

import "./LinkElement.less";

export const LinkElement = observer((props) => {
  const handleMouseEnterItem = (element) => {
    const item = document.getElementById(element);
    const isRadialGradient = props.color.substring(0, 15) === "radial-gradient";
    if (isRadialGradient) {
      item.style.background = props.color;
    } else {
      item.style.backgroundColor = props.color;
    }
  };

  const handleMouseLeaveItem = (element) => {
    const item = document.getElementById(element);
    item.style.background = "none";
    item.style.backgroundColor = "none";
  };

  const handleMouseEnterContainer = (element) => {
    const container = document.getElementById(element);
    container.style.filter = "grayscale(0)";
  };

  const handleMouseLeaveContainer = (element) => {
    const container = document.getElementById(element);
    container.style.filter = "grayscale(1)";
  };

  const formatedSubMenu = props.links.map((link) => {
    return (
      <div className="subMenuItem">
        <div
          className="item"
          id={`item_${link.key}`}
          onMouseEnter={() => handleMouseEnterItem(`item_${link.key}`)}
          onMouseLeave={() => handleMouseLeaveItem(`item_${link.key}`)}
        >
          <a href={link.url} target="_blank" className="item">
            {link.account}
          </a>
        </div>
      </div>
    );
  });

  if (props.links.length === 1) {
    return (
      <div className="link">
        <a href={props.links[0].url} target="_blank">
          <img className="logo" src={props.logo} />
        </a>
      </div>
    );
  }

  return (
    <div className="link">
      <div
        className="container"
        onMouseEnter={() => handleMouseEnterContainer(`logo_${props.name}`)}
        onMouseLeave={() => handleMouseLeaveContainer(`logo_${props.name}`)}
      >
        <img className="logo" src={props.logo} id={`logo_${props.name}`} />
        <div className="subContainer">
          {formatedSubMenu}
          <div className="name">{props.name}</div>
        </div>
      </div>
    </div>
  );
});
