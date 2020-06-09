import React, { Component } from "react";

import { socialMediaInfoList } from "../data/socialMediaInfoList";

class SocialMedia extends Component {
  render() {
    const { socialMediaInfos } = this.props;

    return socialMediaInfos.map((socialMediaInfo, i) => {
      return (
        <a
          key={i}
          href={socialMediaInfo.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={socialMediaInfo.iClassName}></i>
        </a>
      );
    });
  }
}

let poweredByInfos = {
  pClassName: "w3-medium",
  href: "https://www.rashtell.com/",
  aClassName: "w3-hover-text-green",
  name: "rAsHtElL",
};

class PoweredBy extends Component {
  render() {
    const poweredByInfo = this.props;

    return (
      <p className={poweredByInfo.pClassName}>
        Powered by
        <a
          href={poweredByInfo.href}
          target="_blank"
          rel="noopener noreferrer"
          className={poweredByInfo.aClassName}
        >
          {poweredByInfo.name}
        </a>
      </p>
    );
  }
}

export class Footer extends Component {
  render() {
    return (
      <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
        <SocialMedia socialMediaInfos={socialMediaInfoList} />

        <PoweredBy poweredByInfo={poweredByInfos} />
      </footer>
    );
  }
}
