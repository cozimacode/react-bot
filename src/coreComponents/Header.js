import React, { PureComponent } from "react";
import "./coreStyles/Header.css";

export default class Header extends PureComponent {
  render() {
    let { toggleContainer, title, titleAvatar } = this.props;
    return (
      <>
        <span
          className="rcb-header-avatar"
          style={{ backgroundImage: `url(${titleAvatar})` }}
        />
        <p className="rcb-header-text">{title}</p>
        <button onClick={toggleContainer} className="rcb-mobile-close">
          +
        </button>
      </>
    );
  }
}
