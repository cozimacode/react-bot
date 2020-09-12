import { addCustomComponent } from "../redux/actions/dispatch";

export function showResponse({ Component, props, avatar = false }) {
  addCustomComponent({ Component, props, avatar });
}
