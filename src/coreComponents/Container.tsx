import React, {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { connect } from "react-redux";
import { MainProps } from "../ReactBot";
import Send from "../assets/images/send.png";
import { ConversationUI, Conversation } from "./ConversationUI";
import { Header } from "./Header";
import {
  addUserMessage,
  typingEffect,
  hideTyping,
} from "../redux/actions/dispatch";
import "./coreStyles/Container.css";

interface ContainerProps
  extends Required<
    Omit<MainProps, "className" | "initialResponse" | "customLauncherIcon">
  > {
  conversationData: Array<Conversation>;
  toggleContainer: () => void;
}

const mapState = (
  {
    convReducer,
  }: Record<string, Record<string, Record<string, Array<Conversation>>>>,
  { botId }: { botId: string }
) => ({
  conversationData: convReducer[botId].conversationData,
});

const Inner: FunctionComponent<ContainerProps> = ({
  botId,
  conversationData,
  title,
  messagePlaceHolder,
  autofocus,
  toggleContainer,
  typingGif,
  titleAvatar,
  chatAvatar,
  handleUserInput,
}) => {
  const [userInput, setUserInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    autofocus && inputRef.current?.focus();
  }, [autofocus]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight + containerRef.current.clientHeight;
    }
  }, [conversationData]);

  const displayTypingEffect = () => {
    typingEffect(botId);
  };

  const hideTypingEffect = () => {
    hideTyping(botId);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleClick = async () => {
    await addUserMessage(userInput, botId);
    handleUserInput(userInput, displayTypingEffect, hideTypingEffect);
    setUserInput("");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

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
        <ConversationUI
          conversationData={conversationData}
          ref={typingRef}
          typingGif={typingGif}
          chatAvatar={chatAvatar}
        />
      </div>
      <div onKeyDown={handleKeyPress} className="rcb-new-message">
        <input
          ref={inputRef}
          placeholder={messagePlaceHolder}
          value={userInput}
          name="userInput"
          onChange={handleChange}
        />
        <img
          onClick={handleClick}
          className={userInput.length ? "rcb-icon-visible" : "rcb-send-icon"}
          src={Send}
          alt="Send Message"
        />
      </div>
    </div>
  );
};

const Container = connect(mapState)(Inner);

export { Container };
