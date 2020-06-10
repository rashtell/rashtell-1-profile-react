import React, { Component } from "react";

import { gridPropsList } from "../data/gridPropsList";

class Grid extends Component {
  render() {
    const { gridProps } = this.props;

    return (
      <div className="w3-row-padding" style={{ margin: 0 - 16 }}>
        {gridProps.map((gridProp, i) => {
          return (
            <div key={i} className={gridProp.divClassName}>
              {gridProp.column.map((gridColumn, i) => {
                return (
                  <iframe src={gridColumn.href} style={gridColumn.imgstyle}></iframe>
                  // <a
                  //   key={i}
                  //   href={gridColumn.href}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  // >
                  //   <img
                  //     src={gridColumn.imgSrc}
                  //     alt=""
                  //     style={gridColumn.imgStyle}
                  //   />
                  // </a>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

let portfolioProps = {
  divClassName: "w3-padding-64 w3-content",
  divId: "photos",
  h2ClassName: "w3-text-light-grey",
  heading: "Websites Powered by rAsHtElL",
  hrStyle: { width: 200 + "px" },
  hrClassName: "w3-opacity",
};

class Sites extends Component {
  render() {
    const { portfolioProp } = this.props;

    return (
      <div className={portfolioProp.divClassName} id={portfolioProp.divId}>
        <h2 className={portfolioProp.h2ClassName}>{portfolioProp.heading}</h2>
        <hr
          style={portfolioProp.hrStyle}
          className={portfolioProp.hrClassName}
        />

        <Grid gridProps={gridPropsList} />
      </div>
    );
  }
}

export class Portfolio extends Component {
  render() {
    return <Sites portfolioProp={portfolioProps} />;
  }
}
