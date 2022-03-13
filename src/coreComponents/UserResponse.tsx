import React, { FunctionComponent, memo } from "react";
import { Response } from "./ConversationUI";

export const UserResponse: FunctionComponent<Response> = memo(({ data }) => {
  return (
    <div className="rcb-user-response">
      <div className="rcb-user-message">{data.payload}</div>
    </div>
  );
});
