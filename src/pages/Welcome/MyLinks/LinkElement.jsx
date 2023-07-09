import React from "react";
import { observer } from "mobx-react";

import "./LinkElement.less";

export const LinkElement = observer((props) => {
  const formatedSubMenu = props.links.map((link) => {
    return (
      <div className="subMenuItem">
        <div className="item">
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
      <div className="container">
        <img className="logo" src={props.logo} />
        <div className="subContainer">{formatedSubMenu}</div>
      </div>
    </div>
  );
});
