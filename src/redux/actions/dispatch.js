import { store } from "../store";
import {
  InitializeBot,
  UserMessage,
  BotMessage,
  CustomComponent,
  Typing,
} from "./convActions";

function initializeBot(botId) {
  return new Promise((resolve) => {
    store.dispatch(InitializeBot(botId));
    resolve();
  });
}

function addBotMessage(message) {
  return new Promise((resolve) => {
    store.dispatch(BotMessage(message));
    resolve();
  });
}

function addUserMessage(message) {
  return new Promise((resolve) => {
    store.dispatch(UserMessage(message));
    resolve();
  });
}

function addCustomComponent({ Component, props, avatar = false }) {
  return new Promise((resolve) => {
    store.dispatch(CustomComponent(Component, props, avatar));
    resolve();
  });
}

function typingEffect() {
  return new Promise((resolve) => {
    store.dispatch(Typing());
    resolve();
  });
}

export {
  addBotMessage,
  addUserMessage,
  addCustomComponent,
  initializeBot,
  typingEffect,
};
