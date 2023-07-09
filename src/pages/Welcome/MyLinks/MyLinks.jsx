import React from "react";
import { Tooltip } from "antd";
import { observer } from "mobx-react";

import InstaLogo from "../../../img/logos/instaLogo.png";
import SpotifyLogo from "../../../img/logos/spotifyLogo.png";
import SoundcloudLogo from "../../../img/logos/soundcloudLogo.png";
import YoutubeLogo from "../../../img/logos/youtubeLogo.png";
import GithubLogo from "../../../img/logos/githubLogo.png";

import "./MyLinks.less";

export const MyLinks = observer(() => {
  return (
    <div className="containerLink">
      <div className="link">
        <a href="https://www.instagram.com/clementvanstaen/" target="_blank">
          <Tooltip title="Instagram" color="tomato">
            <img src={InstaLogo} className="logo" />
          </Tooltip>
        </a>
      </div>
      <div className="link">
        <a href="https://soundcloud.com/vanstaenmusic" target="_blank">
          <Tooltip title="Soundcloud" color="tomato">
            <img src={SoundcloudLogo} className="logo" />
          </Tooltip>
        </a>
      </div>
      <div className="link">
        <a
          href="https://open.spotify.com/intl-de/artist/0dsj1Ni4YlrtmcySPpnrhp"
          target="_blank"
        >
          <Tooltip title="Spotify" color="tomato">
            <img src={SpotifyLogo} className="logo" />
          </Tooltip>
        </a>
      </div>
      <div className="link">
        <a href="https://youtube.com" target="_blank">
          <Tooltip title="Youtube" color="tomato">
            <img src={YoutubeLogo} className="logo" />
          </Tooltip>
        </a>
      </div>
      <div className="link">
        <a href="https://github.com/vanStaen/clementvanstaen" target="_blank">
          <Tooltip title="Github" color="tomato">
            <img src={GithubLogo} className="logo" />
          </Tooltip>
        </a>
      </div>
    </div>
  );
});
