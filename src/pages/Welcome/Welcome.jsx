import React from "react";
import { observer } from "mobx-react";

import { RevolvingText } from "./RevolvingText/RevolvingText";
import { MyLinks } from "./myLinks/MyLinks";

import "./Welcome.less";

export const Welcome = observer(() => {
  return (
    <div className="container">
      <div className="welcome">
        <RevolvingText />
        <MyLinks />
      </div>
      <div className="background"></div>
    </div>
  );
});
