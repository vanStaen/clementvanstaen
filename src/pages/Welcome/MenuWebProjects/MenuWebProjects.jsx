import React from "react";
import { observer } from "mobx-react";

import GithubLogo from "../../../img/logos/githubLogo.png";

import { LinkElement } from "../MenuLinks/LinkElement";

import "./MenuWebProjects.less";

export const MenuWebProjects = observer(() => {
  return (
    <div className="containerWebProjects">
      <LinkElement
        name="Web projects"
        color="rgba(70, 130, 180, .75)"
        align="left"
        links={[
          {
            key: 16,
            account: "Rewaer",
            url: "https://www.rewaer.com/",
          },
          {
            key: 17,
            account: "Todogether",
            url: "https://www.todogether.com/",
          },
          {
            key: 18,
            account: "Schwerelos Berlin",
            url: "https://www.schwerelos-berlin.com/",
          },
        ]}
      />
      <LinkElement
        name="Github"
        logo={GithubLogo}
        align="left"
        links={[
          {
            account: "vanStaen",
            url: "https://github.com/vanStaen/",
          },
        ]}
      />
    </div>
  );
});
