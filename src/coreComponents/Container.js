import React, { Component, createRef } from "react";
import Send from "../assets/images/send.png";
import ConversationUI from "../coreComponents/ConversationUI";
import Header from "../coreComponents/Header";
import { addUserMessage } from "../redux/actions/dispatch";
import "./coreStyles/Container.css";

export let containerRef = createRef();

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.inputRef = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getResponseFromServer = this.getResponseFromServer.bind(this);
  }

  componentDidMount() {
    this.props.autofocus && this.inputRef.current.focus();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getResponseFromServer(message) {
    this.props.handleUserInput(message);
  }

  async handleClick() {
    await addUserMessage(this.state.userInput);
    this.getResponseFromServer(this.state.userInput);
    this.setState({
      userInput: "",
    });
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    let { userInput } = this.state;
    let { titleAvatar, chatAvatar, typingGif, toggleContainer, title } =
      this.props;
    return (
      <div className="rcb-container">
        <div className="rcb-header">
          <Header
            toggleContainer={toggleContainer}
            title={title}
            titleAvatar={titleAvatar}
          />
        </div>
        <div className="rcb-conversation" ref={containerRef}>
          <ConversationUI typingGif={typingGif} chatAvatar={chatAvatar} />
        </div>
        <div onKeyDown={this.handleKeyPress} className="rcb-new-message">
          <input
            ref={this.inputRef}
            placeholder="Type your message..."
            value={userInput}
            name="userInput"
            onChange={this.handleChange}
          />
          <img
            onClick={this.handleClick}
            className={userInput.length ? "rcb-icon-visible" : "rcb-send-icon"}
            src={Send}
            alt="Send Message"
          />
        </div>
      </div>
    );
  }
}

export default Container;
