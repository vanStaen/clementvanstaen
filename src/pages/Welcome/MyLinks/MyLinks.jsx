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
      <LinkElement
        name="Github"
        logo={GithubLogo}
        links={[
          {
            account: "vanStaen",
            url: "https://github.com/vanStaen/",
          },
        ]}
      />
      <LinkElement
        name="Instagram"
        logo={InstaLogo}
        links={[
          {
            account: "@clementvanstaen",
            url: "https://www.instagram.com/clementvanstaen/",
          },
          {
            account: "@vanstaenmusic",
            url: "https://www.instagram.com/vanstaenmusic/",
          },
          {
            account: "@deuxfrancs",
            url: "https://www.instagram.com/deuxfrancs/",
          },
          {
            account: "@vinticiousberlin",
            url: "https://www.instagram.com/vinticiousberlin/",
          },
          {
            account: "@miralykkeofficial",
            url: "https://www.instagram.com/miralykkeofficial/",
          },
        ]}
      />
      <LinkElement
        name="Spotify"
        logo={SpotifyLogo}
        links={[
          {
            account: "van Staen",
            url: "https://open.spotify.com/intl-de/artist/0dsj1Ni4YlrtmcySPpnrhp",
          },
          {
            account: "Mira Lykke",
            url: "https://open.spotify.com/intl-de/artist/6RjHfJFz2WqJ4oGTAHRglg",
          },
          {
            account: "Wilhelm Harakiri",
            url: "https://open.spotify.com/intl-de/artist/4KLcngF6tGCMbB8fA2uWqn",
          },
        ]}
      />
      <LinkElement
        name="Soundcloud"
        logo={SoundcloudLogo}
        links={[
          {
            account: "van Staen",
            url: "https://www.soundcloud.com/vanstaenmusic/",
          },
          {
            account: "Mira Lykke",
            url: "https://www.soundcloud.com/miralykke/",
          },
          {
            account: "Purzelbaum Records",
            url: "https://www.soundcloud.com/purzelbaumrecords/",
          },
        ]}
      />
      <LinkElement
        name="Youtube"
        logo={YoutubeLogo}
        links={[
          {
            account: "The Antiquariat",
            url: "https://www.youtube.com/@theantiquariat",
          },
          {
            account: "Purzelbaum Records",
            url: "https://www.youtube.com/@purzelbaumrecords3838",
          },
          {
            account: "Mute Bouldering Vlog",
            url: "https://www.youtube.com/@clementvanstaen",
          },
        ]}
      />
    </div>
  );
});
