import React, { PureComponent } from "react";

export default class CustomComponent extends PureComponent {
  render() {
    let { data, chatAvatar } = this.props;
    return (
      <div className="rcb-custom">
        <span
          className="rcb-bot-avatar"
          style={{
            visibility: data.avatar ? "visible" : "hidden",
            backgroundImage: `url(${chatAvatar})`,
          }}
        />
        <data.custom />
      </div>
    );
  }
}
