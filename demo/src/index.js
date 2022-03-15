import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactBot } from "../../dist";
import { mockAPIResponse } from "../utils/network-utils";
import CustomResponse from "../utils/response-utils";
import "../../dist/styles.css";
import "./custom.css";

class Demo extends Component {
  handleUserInput = (input, displayTypingEffect, hideTypingEffect) => {
    displayTypingEffect();
    // We are using promises and setTimeout here to simulate delay for the mocked responses. This is where you'd make the call to the backend.
    setTimeout(async () => {
      await mockAPIResponse(input, "bot1");
      hideTypingEffect();
    }, 2000);
  };

  /* enable the code below if you wish to play with multiple bots feature 
  (make sure you pass a unique ID for each bot via 'botId' prop and use
  the same Id when calling the available methods. Passing 'botId' is not
  mandatory if you are not displaying multiple bots on the same page) */

  handleUserInputTwo = (input, displayTypingEffect, hideTypingEffect) => {
    displayTypingEffect();
    // We are using promises and setTimeout here to simulate delay for the mocked responses. This is where you'd make the call to the backend.
    setTimeout(async () => {
      await mockAPIResponse(input, "bot2");
      hideTypingEffect();
    }, 2000);
  };

  render() {
    return (
      <>
        <ReactBot
          botId="bot1"
          handleUserInput={this.handleUserInput}
          autofocus={false}
        />
        <ReactBot
          botId="bot2"
          className="secondInstance"
          handleUserInput={this.handleUserInputTwo}
        />
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("demo"));
