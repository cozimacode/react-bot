import { ElementType } from "react";
import ActionTypes from "./actionTypes";
import { v4 as uuid } from "uuid";

export const InitializeBot = (botId: string) => ({
  type: ActionTypes.INITIALIZE,
  botId,
});

export const UserMessage = (message: string, botId: string) => ({
  type: ActionTypes.USER,
  payload: message,
  id: uuid(),
  botId,
});

export const BotMessage = (message: string, botId: string) => ({
  type: ActionTypes.BOT,
  payload: message,
  id: uuid(),
  botId,
});

export const CustomComponent = (
  component: ElementType,
  props: Record<string, unknown>,
  avatar: boolean,
  botId: string
) => ({
  type: ActionTypes.CUSTOM,
  props,
  payload: component,
  avatar,
  id: uuid(),
  botId,
});

export const Typing = (botId: string) => ({
  type: ActionTypes.TYPING,
  id: uuid(),
  botId,
});

export const HideTyping = (botId: string) => ({
  type: ActionTypes.HIDETYPING,
  botId,
});
