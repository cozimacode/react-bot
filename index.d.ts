// Type definitions for ReactBot v2.0.1
// Project: <https://github.com/cozimacode/react-bot>
// Definitions by: Naser Baig <https://github.com/cozimacode>

import { ElementType, FunctionComponent } from "react";

export interface InitialResponse {
  Component: ElementType;
  props: Record<string, unknown>;
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

export const ReactBot: FunctionComponent<MainProps>;

export function addUserMessage(message: string, botId?: string): Promise<void>;
export function addBotMessage(message: string, botId?: string): Promise<void>;
export function addCustomComponent(
  { Component, props, avatar }: InitialResponse,
  botId?: string
): Promise<void>;
