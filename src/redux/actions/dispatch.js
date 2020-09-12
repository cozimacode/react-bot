import React, { PureComponent } from "react";
import { store } from "../store";
import {
  UserMessage,
  BotMessage,
  CustomComponent,
  Typing,
} from "./convActions";

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
    store.dispatch(
      CustomComponent(
        class extends PureComponent {
          render() {
            return <Component {...props} />;
          }
        },
        avatar
      )
    );
    resolve();
  });
}

function typingEffect(component) {
  return new Promise((resolve) => {
    store.dispatch(Typing(component));
    resolve();
  });
}

export { addBotMessage, addUserMessage, addCustomComponent, typingEffect };
