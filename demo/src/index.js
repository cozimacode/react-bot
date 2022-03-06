import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactBot, displayTypingEffect, hideTypingEffect } from "../../dist";
import { mockAPIResponse } from "../utils/network-utils";
import CustomResponse from "../utils/response-utils";
import "../../dist/styles.css";

class Demo extends Component {
  handleUserInput = (input) => {
    displayTypingEffect();
    // We are using promises and setTimeout here to simulate delay for the mocked responses. This is where you'd make the call to the backend.
    setTimeout(async () => {
      await mockAPIResponse(input);
      hideTypingEffect();
    }, 2000);
  };

  render() {
    return (
      <ReactBot
        handleUserInput={this.handleUserInput}
        initialResponse={{
          Component: CustomResponse,
          props: { id: 1, name: "Naser" },
          avatar: true,
        }}
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("demo"));
