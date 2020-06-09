import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { buttonProps } = this.props;

    return buttonProps.map((buttonProps, i) => {
      return (
        <a
          key={i}
          target="_blank"
          rel="noreferrer noopener"
          href={buttonProps.href}
        >
          <button className={buttonProps.buttonClassName}>
            <i className={buttonProps.iClassName}></i>
            {buttonProps.text}
          </button>
        </a>
      );
    });
  }
}
