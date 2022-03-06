import ActionTypes from "./actionTypes";
import { v4 as uuid } from "uuid";

export const UserMessage = (message) => ({
  type: ActionTypes.USER,
  payload: message,
  id: uuid(),
});

export const BotMessage = (message) => ({
  type: ActionTypes.BOT,
  payload: message,
  id: uuid(),
});

export const CustomComponent = (component, avatar) => ({
  type: ActionTypes.CUSTOM,
  payload: component,
  avatar,
  id: uuid(),
});

export const Typing = () => ({
  type: ActionTypes.TYPING,
  id: uuid(),
});
