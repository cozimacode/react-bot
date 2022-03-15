import { InitialResponse } from "../ReactBot";
import { addCustomComponent } from "../redux/actions/dispatch";

export const showResponse = (
  { Component, props, avatar = false }: InitialResponse,
  botId: string
) => {
  addCustomComponent({ Component, props, avatar }, botId);
};
