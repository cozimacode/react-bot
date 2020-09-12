import React, { PureComponent } from "react";

export default class UserResponse extends PureComponent {
  render() {
    return (
      <div className="rcb-user-response">
        <div className="rcb-user-message">{this.props.data.text}</div>
      </div>
    );
  }
}
