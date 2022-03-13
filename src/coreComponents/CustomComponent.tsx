import React, { ElementType, FunctionComponent, memo } from "react";
import { Response } from "./ConversationUI";

export const CustomComponent: FunctionComponent<Response> = memo(
  ({ chatAvatar, data: { avatar, payload, props } }) => {
    let Custom = payload as ElementType;
    return (
      <div className="rcb-custom">
        <span
          className="rcb-bot-avatar"
          style={{
            visibility: avatar ? "visible" : "hidden",
            backgroundImage: `url(${chatAvatar})`,
          }}
        />
        <Custom {...props} />
      </div>
    );
  }
);
