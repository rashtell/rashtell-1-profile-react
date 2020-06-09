import React, { Component } from "react";

import { headerPropsList } from "../data/headerPropsList";

export class Header extends Component {
  render() {
    return (
      // < !--Header / Home-- >
      headerPropsList.map((headerProps, i) => {
        return (
          <header
            key={i}
            className={headerProps.headerClassName}
            id={headerProps.id}
          >
            <h1 className={headerProps.h1ClassName}>
              <span className={headerProps.spanClassName}>I'm</span>
              {headerProps.name}
            </h1>
            <p>{headerProps.description}.</p>
            <img
              src={headerProps.src}
              alt={headerProps.name}
              className={headerProps.imgClassName}
              width="300"
              height="300"
            />
          </header>
        );
      })
    );
  }
}
