import React, { FunctionComponent } from "react";
import { v4 as uuid } from "uuid";
import { App } from "./App";
import { initializeBot } from "./redux/actions/dispatch";
import typing from "./assets/images/typing.gif";
import avatar from "./assets/images/avatar.png";
import "./index.css";
import "./coreComponents/coreStyles/BrowserSpecific.css";

export interface InitialResponse {
  Component: JSX.Element;
  props: Record<string, any>;
  avatar?: boolean;
}

export interface MainProps {
  className?: string;
  customLauncherIcon?: string | boolean;
  title?: string;
  messagePlaceHolder?: string;
  autofocus?: boolean;
  initialResponse?: InitialResponse | boolean;
  typingGif?: string;
  titleAvatar?: string;
  chatAvatar?: string;
  handleUserInput: (
    input: string,
    displayTypingEffect: () => void,
    hideTypingEffect: () => void
  ) => void;
}

export const ReactBot: FunctionComponent<MainProps> = ({
  className = "",
  customLauncherIcon = false,
  title = "Hi, there!",
  messagePlaceHolder = "Type a message...",
  autofocus = true,
  initialResponse = false,
  typingGif = typing,
  titleAvatar = avatar,
  chatAvatar = avatar,
  handleUserInput,
}) => {
  const botId = uuid();
  initializeBot(botId);

  return (
    <App
      botId={botId}
      className={className}
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
};
