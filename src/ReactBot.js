import React, { Component } from "react";
import App from "./App";
import typingGif from "./assets/images/typing.gif";
import avatar from "./assets/images/avatar.png";
import "./index.css";
import "./coreComponents/coreStyles/BrowserSpecific.css";

function ReactBot({
  customLauncherIcon,
  title,
  messagePlaceHolder,
  autofocus,
  initialResponse,
  typingGif,
  titleAvatar,
  chatAvatar,
  handleUserInput,
}) {
  return (
    <App
      launcherIcon={customLauncherIcon}
      title={title}
      messagePlaceHolder={messagePlaceHolder}
      autofocus={autofocus}
      initialResponse={initialResponse}
      typingGif={typingGif}
      titleAvatar={titleAvatar}
      chatAvatar={chatAvatar}
      handleUserInput={handleUserInput}
    />
  );
}

const defaultProps = {
  customLauncherIcon: false,
  initialResponse: false,
  title: "Hi, there!",
  messagePlaceHolder: "Type a message...",
  autofocus: true,
  typingGif: typingGif,
  titleAvatar: avatar,
  chatAvatar: avatar,
};

ReactBot.defaultProps = defaultProps;

export default ReactBot;
