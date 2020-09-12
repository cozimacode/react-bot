import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { showResponse } from "../utils/response-utils";
import "./coreStyles/Launcher.css";

export default class Launcher extends Component {
  componentDidMount() {
    this.props.initialResponse && showResponse(this.props.initialResponse);
  }

  render() {
    let { isContainerActive, toggleContainer, launcherIcon } = this.props;
    return (
      <div className="rcb-launcher">
        <button
          onClick={toggleContainer}
          className={
            isContainerActive ? "rcb-launcher-close" : "rcb-launcher-open"
          }
        >
          {isContainerActive ? (
            <p>+</p>
          ) : launcherIcon ? (
            <img src={launcherIcon} alt="Launcher Icon" />
          ) : (
            <FontAwesomeIcon
              style={{
                color: "#ffffff",
                fontSize: "2.5em",
                textAlign: "center",
              }}
              icon={faComments}
            />
          )}
        </button>
      </div>
    );
  }
}
