import React from "react";
import { Tooltip } from "antd";
import { observer } from "mobx-react";

import InstaLogo from "../../../img/logos/instaLogo.png";
import ResidentAdvisorLogo from "../../../img/logos/residentAdvisorLogo.png";
import SoundcloudLogo from "../../../img/logos/soundcloudLogo.png";

import "./MyLinks.less";

export const MyLinks = observer(() => {
  return (
    <div className="containerLink">
      <div className="link">
        <Tooltip title="Instagram" color="tomato">
          <a href="https://www.instagram.com/clementvanstaen/" target="_blank">
            <img src={InstaLogo} className="logoInsta" />
          </a>
        </Tooltip>
      </div>
      <div className="link">
        <Tooltip title="Resident Advisor" color="tomato">
          <a href="https://ra.co/labels/21798" target="_blank">
            <img src={ResidentAdvisorLogo} className="logoRa" />
          </a>
        </Tooltip>
      </div>
      <div className="link">
        <Tooltip title="Soundcloud" color="tomato">
          <a href="Gensen" target="_blank">
            <img src={SoundcloudLogo} className="logoSoundcloud" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
});
