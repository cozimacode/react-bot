import React, { FunctionComponent, memo } from "react";
import { Response } from "./ConversationUI";

export const BotResponse: FunctionComponent<Response> = memo(
  ({ chatAvatar, data }) => {
    return (
      <div className="rcb-bot-response">
        <span
          className="rcb-bot-avatar"
          style={{ backgroundImage: `url(${chatAvatar})` }}
        />
        <div className="rcb-bot-message">{data.payload}</div>
      </div>
    );
  }
);
