import React from "react";

export default function CustomResponse(props) {
  return (
    <div className="rcb-bot-message">
      Hi, I am ReactBot and this is an initial response with ID {props.id}{" "}
      invoked by {props.name}
    </div>
  );
}
