import React, { FunctionComponent, ElementType } from "react";
import { App } from "./App";
import { initializeBot } from "./redux/actions/dispatch";
import typing from "./assets/images/typing.gif";
import avatar from "./assets/images/avatar.png";
import "./index.css";
import "./coreComponents/coreStyles/BrowserSpecific.css";

export interface InitialResponse {
  Component: ElementType;
  props: Record<string, any>;
  avatar?: boolean;
}

export interface MainProps {
  botId?: string;
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
  botId = "default",
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
  initializeBot(botId);

  return (
    <App
      botId={botId}
      className={`${className} ${botId}`}
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
