import React, { PureComponent } from "react";

export default class BotResponse extends PureComponent {
  render() {
    let { chatAvatar, data } = this.props;
    return (
      <div className="rcb-bot-response">
        <span
          className="rcb-bot-avatar"
          style={{ backgroundImage: `url(${chatAvatar})` }}
        />
        <div className="rcb-bot-message">{data.text}</div>
      </div>
    );
  }
}
