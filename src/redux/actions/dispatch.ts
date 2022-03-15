import { InitialResponse } from "../../ReactBot";
import { store } from "../store";
import {
  InitializeBot,
  UserMessage,
  BotMessage,
  CustomComponent,
  Typing,
  HideTyping,
} from "./convActions";

function initializeBot(botId: string) {
  store.dispatch(InitializeBot(botId));
}

function addBotMessage(message: string, botId = "default"): Promise<void> {
  return new Promise((resolve) => {
    store.dispatch(BotMessage(message, botId));
    resolve();
  });
}

function addUserMessage(message: string, botId = "default"): Promise<void> {
  return new Promise((resolve) => {
    store.dispatch(UserMessage(message, botId));
    resolve();
  });
}

function addCustomComponent(
  { Component, props, avatar = false }: InitialResponse,
  botId = "default"
): Promise<void> {
  return new Promise((resolve) => {
    store.dispatch(CustomComponent(Component, props, avatar, botId));
    resolve();
  });
}

function typingEffect(botId = "default") {
  store.dispatch(Typing(botId));
}

function hideTyping(botId = "default") {
  store.dispatch(HideTyping(botId));
}

export {
  addBotMessage,
  addUserMessage,
  addCustomComponent,
  initializeBot,
  typingEffect,
  hideTyping,
};
