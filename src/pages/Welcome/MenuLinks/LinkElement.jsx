import React from "react";
import { observer } from "mobx-react";
import { GlobalOutlined } from "@ant-design/icons";

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
        <div
          className="container"
          style={{
            justifyContent: props.align && props.align,
          }}
          onMouseEnter={() => handleMouseEnterContainer(`logo_${props.name}`)}
          onMouseLeave={() => handleMouseLeaveContainer(`logo_${props.name}`)}
        >
          {props.logo ? (
            <img
              className="logo"
              src={props.logo}
              id={`logo_${props.name}`}
              onClick={() => window.open(props.links[0].url, "_blank")}
            />
          ) : (
            <GlobalOutlined
              id={`logo_${props.name}`}
              className="icon"
              onClick={() => window.open(props.links[0].url, "_blank")}
            />
          )}
          <div
            className="subContainer"
            style={{
              textAlign: props.align && props.align,
            }}
          >
            <div className="name">{props.name}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="link">
      <div
        className="container"
        style={{
          justifyContent: props.align && props.align,
        }}
        onMouseEnter={() => handleMouseEnterContainer(`logo_${props.name}`)}
        onMouseLeave={() => handleMouseLeaveContainer(`logo_${props.name}`)}
      >
        {props.logo ? (
          <img className="logo" src={props.logo} id={`logo_${props.name}`} />
        ) : (
          <GlobalOutlined id={`logo_${props.name}`} className="icon" />
        )}
        <div
          className="subContainer"
          style={{
            textAlign: props.align && props.align,
          }}
        >
          {formatedSubMenu}
          <div className="name">{props.name}</div>
        </div>
      </div>
    </div>
  );
});
