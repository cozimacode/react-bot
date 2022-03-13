import React, { FunctionComponent, memo } from "react";
import "./coreStyles/Header.css";

interface HeaderProps {
  toggleContainer: () => void;
  title: string;
  titleAvatar: string;
}

export const Header: FunctionComponent<HeaderProps> = memo(
  ({ toggleContainer, title, titleAvatar }) => {
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
);
