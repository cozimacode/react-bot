import React, {
  ElementType,
  ForwardRefExoticComponent,
  RefObject,
  RefAttributes,
  forwardRef,
} from "react";
import ActionTypes from "../redux/actions/actionTypes";
import { UserResponse } from "./UserResponse";
import { BotResponse } from "./BotResponse";
import { Typing } from "./Typing";
import { CustomComponent } from "./CustomComponent";
import "./coreStyles/ConversationUI.css";

export interface Conversation {
  type: string;
  id: string;
  props?: Record<string, unknown>;
  payload?: string | ElementType;
  avatar?: boolean;
}

export interface Response {
  chatAvatar?: string;
  data: Conversation;
}

export interface ConversationProps {
  conversationData?: Array<Conversation>;
  typingGif: string;
  ref: RefObject<HTMLDivElement>;
  chatAvatar: string;
}

export const ConversationUI: ForwardRefExoticComponent<
  Omit<ConversationProps, "ref"> & RefAttributes<HTMLDivElement>
> = forwardRef(({ conversationData, typingGif, chatAvatar }, ref) => {
  return (
    <>
      {conversationData?.map((conversation) => {
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
            ref={ref}
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
});
