import React, { Component } from "react";
import { connect } from "react-redux";
import ActionTypes from "../redux/actions/actionTypes";
import UserResponse from "./UserResponse";
import BotResponse from "./BotResponse";
import Typing from "./Typing";
import CustomComponent from "./CustomComponent";
import "./coreStyles/ConversationUI.css";

class ConversationUI extends Component {
  render() {
    let { conversationData, typingGif, chatAvatar } = this.props;
    return (
      <>
        {conversationData.map((conversation) => {
          return conversation.type === ActionTypes.BOT ? (
            <BotResponse
              key={conversation.id}
              data={conversation}
              chatAvatar={chatAvatar}
            />
          ) : conversation.type === ActionTypes.CUSTOM ? (
            <CustomComponent
              key={conversation.id}
              data={conversation}
              chatAvatar={chatAvatar}
            />
          ) : conversation.type === ActionTypes.TYPING ? (
            <Typing
              typingGif={typingGif}
              chatAvatar={chatAvatar}
              key={conversation.id}
            />
          ) : (
            <UserResponse key={conversation.id} data={conversation} />
          );
        })}
      </>
    );
  }
}

const mapState = (state) => ({
  conversationData: state.convReducer.conversationData,
});

export default connect(mapState)(ConversationUI);
