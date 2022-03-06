import React, { FunctionComponent } from "react";
import { App } from "./App";
import typing from "./assets/images/typing.gif";
import avatar from "./assets/images/avatar.png";
import "./index.css";
import "./coreComponents/coreStyles/BrowserSpecific.css";

interface InitialResponse {
  Component: JSX.Element;
  props: Record<string, any>;
  avatar?: boolean;
}

export interface MainProps {
  customLauncherIcon?: string | boolean;
  title?: string;
  messagePlaceHolder?: string;
  autofocus?: boolean;
  initialResponse?: InitialResponse | boolean;
  typingGif?: string;
  titleAvatar?: string;
  chatAvatar?: string;
  handleUserInput: (input: string) => void;
}

export const ReactBot: FunctionComponent<MainProps> = ({
  customLauncherIcon = false,
  title = "Hi, there!",
  messagePlaceHolder = "Type a message...",
  autofocus = true,
  initialResponse,
  typingGif = typing,
  titleAvatar = avatar,
  chatAvatar = avatar,
  handleUserInput,
}) => (
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
