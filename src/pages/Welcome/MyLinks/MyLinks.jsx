import React from "react";
import { observer } from "mobx-react";

import InstaLogo from "../../../img/logos/instaLogo.png";
import SpotifyLogo from "../../../img/logos/spotifyLogo.png";
import SoundcloudLogo from "../../../img/logos/soundcloudLogo.png";
import YoutubeLogo from "../../../img/logos/youtubeLogo.png";
import GithubLogo from "../../../img/logos/githubLogo.png";

import { LinkElement } from "./LinkElement";

import "./MyLinks.less";

export const MyLinks = observer(() => {
  return (
    <div className="containerLink">
      {/*<LinkElement
        name="Github"
        logo={GithubLogo}
        links={[
          {
            account: "vanStaen",
            url: "https://github.com/vanStaen/",
          },
        ]}
      />*/}
      <LinkElement
        name="Instagram"
        logo={InstaLogo}
        color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
        links={[
          {
            key: 1,
            account: "@clementvanstaen",
            url: "https://www.instagram.com/clementvanstaen/",
          },
          {
            key: 2,
            account: "@vanstaenmusic",
            url: "https://www.instagram.com/vanstaenmusic/",
          },
          {
            key: 3,
            account: "@deuxfrancs",
            url: "https://www.instagram.com/deuxfrancs/",
          },
          {
            key: 4,
            account: "@vinticiousberlin",
            url: "https://www.instagram.com/vinticiousberlin/",
          },
          {
            key: 5,
            account: "@miralykkeofficial",
            url: "https://www.instagram.com/miralykkeofficial/",
          },
        ]}
      />
      <LinkElement
        name="Spotify"
        logo={SpotifyLogo}
        color="rgba(29, 185, 84, 1)"
        links={[
          {
            key: 6,
            account: "van Staen",
            url: "https://open.spotify.com/intl-de/artist/0dsj1Ni4YlrtmcySPpnrhp",
          },
          {
            key: 7,
            account: "Mira Lykke",
            url: "https://open.spotify.com/intl-de/artist/6RjHfJFz2WqJ4oGTAHRglg",
          },
          {
            key: 8,
            account: "Wilhelm Harakiri",
            url: "https://open.spotify.com/intl-de/artist/4KLcngF6tGCMbB8fA2uWqn",
          },
          {
            key: 9,
            account: "The Antiquariat",
            url: "https://open.spotify.com/intl-de/artist/5qGLaOu3xYCxklHmJuiFso",
          },
        ]}
      />
      <LinkElement
        name="Soundcloud"
        logo={SoundcloudLogo}
        color="rgba(242, 111, 35, 1)"
        links={[
          {
            key: 10,
            account: "van Staen",
            url: "https://www.soundcloud.com/vanstaenmusic/",
          },
          {
            key: 11,
            account: "Mira Lykke",
            url: "https://www.soundcloud.com/miralykke/",
          },
          {
            key: 12,
            account: "Purzelbaum Records",
            url: "https://www.soundcloud.com/purzelbaumrecords/",
          },
        ]}
      />
      <LinkElement
        name="Youtube"
        logo={YoutubeLogo}
        color="rgba(255, 0, 0, 1)"
        links={[
          {
            key: 13,
            account: "The Antiquariat",
            url: "https://www.youtube.com/@theantiquariat",
          },
          {
            key: 14,
            account: "Purzelbaum Records",
            url: "https://www.youtube.com/@purzelbaumrecords3838",
          },
          {
            key: 15,
            account: "Mute Bouldering Vlog",
            url: "https://www.youtube.com/@clementvanstaen",
          },
        ]}
      />
    </div>
  );
});
