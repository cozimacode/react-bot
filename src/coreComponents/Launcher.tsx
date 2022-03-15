import React, { FunctionComponent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { showResponse } from "../utils/response-utils";
import { InitialResponse } from "../ReactBot";
import "./coreStyles/Launcher.css";

interface LauncherProps {
  botId: string;
  initialResponse: InitialResponse | boolean;
  launcherIcon: string | boolean;
  toggleContainer: () => void;
  isContainerActive: boolean;
}

export const Launcher: FunctionComponent<LauncherProps> = ({
  botId,
  isContainerActive,
  toggleContainer,
  launcherIcon,
  initialResponse,
}) => {
  useEffect(() => {
    initialResponse && showResponse(initialResponse as InitialResponse, botId);
  }, [initialResponse]);
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
        ) : typeof launcherIcon === "string" ? (
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
};
