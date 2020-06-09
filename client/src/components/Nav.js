import React, { Component } from "react";
import { navMenuItemPropsList } from "../data/navMenuItemPropsList";
import { navMenuItemMiniPropsList } from "../data/navMenuItemMiniPropsList";

export class Nav extends Component {
  render = () => {
    return (
      // <!-- Icon Bar (Sidebar - hidden on small screens) -->
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <NavImageItem
          href="#"
          id="menuImage"
          src="images/rashtell_avatar.jpg"
        />

        <NavMenuItem />
      </nav>
    );
  };
}

class NavMenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navMenuItemPropsList: navMenuItemPropsList,
    };
  }

  handleClick = (id, e) => {
    let navMenuItemProps = this.state.navMenuItemPropsList;
    navMenuItemProps.find((match) => match.id === id).aClassName =
      "w3-bar-item w3-button w3-padding-large w3-hover-black w3-black";

    navMenuItemProps
      .filter((match) => id !== match.id)
      .map(
        (single) =>
          (single.aClassName =
            "w3-bar-item w3-button w3-padding-large w3-hover-black")
      );

    this.setState({
      navMenuItemPropsList: navMenuItemProps,
    });
  };

  render = () => {
    return this.state.navMenuItemPropsList.map((navMenuItemProp, i) => {
      return (
        <a
          key={i}
          onClick={(e) => this.handleClick(navMenuItemProp.id, e)}
          href={navMenuItemProp.href}
          className={navMenuItemProp.aClassName}
          id={navMenuItemProp.id}
        >
          <i className={navMenuItemProp.iClassName}></i>
          <p>{navMenuItemProp.menu}</p>
        </a>
      );
    });
  };
}

class NavImageItem extends Component {
  render = () => {
    const { href, id, src } = this.props;
    return (
      <a href={href} id={id}>
        <img src={src} alt="" width={100} />
      </a>
    );
  };
}

class NavMenuItemMini extends Component {
  render() {
    console.log("NavMenuItemMini");
    const { navMenuItemMiniProps } = this.props;

    return navMenuItemMiniProps.map((navMenuItemMiniProp, i) => {
      return (
        <a
          key={i}
          href={navMenuItemMiniProp.href}
          className={navMenuItemMiniProp.className}
          style={navMenuItemMiniProp.style}
        >
          {navMenuItemMiniProp.menu}
        </a>
      );
    });
  }
}

export class NavMini extends Component {
  render() {
    return (
      // <!-- Navbar on small screens (Hidden on medium and large screens) -->
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <NavMenuItemMini navMenuItemMiniProps={navMenuItemMiniPropsList} />
        </div>
      </div>
    );
  }
}
