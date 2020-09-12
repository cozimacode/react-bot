import React, { PureComponent, createRef } from "react";
import { typingEffect } from "../redux/actions/dispatch";
import { containerRef } from "./Container";

let typingRef = createRef();

export async function displayTypingEffect() {
  await typingEffect(Typing);
  typingRef.current.className += " rcb-is-typing";
  containerRef.current.scrollTop = containerRef.current.scrollHeight + 700;
}

export function hideTypingEffect() {
  typingRef.current.className = "rcb-typing-container";
  containerRef.current.scrollTop = containerRef.current.scrollHeight + 700;
}

export default class Typing extends PureComponent {
  render() {
    let { typingGif, chatAvatar } = this.props;
    return (
      <div ref={typingRef} className="rcb-typing-container">
        <span
          className="rcb-bot-avatar"
          style={{ backgroundImage: `url(${chatAvatar})` }}
        />
        <div className="rcb-bot-message rcb-typing-effect">
          <img width="40px" src={typingGif} alt="Typing Effect" />
        </div>
      </div>
    );
  }
}
