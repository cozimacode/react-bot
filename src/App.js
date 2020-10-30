import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { useState } from "react";
import Launcher from "./coreComponents/Launcher";
import Container from "./coreComponents/Container";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App({
  launcherIcon,
  title,
  messagePlaceHolder,
  autofocus,
  initialResponse,
  typingGif,
  titleAvatar,
  chatAvatar,
  handleUserInput,
}) {
  let [isContainerActive, toggleContainer] = useState(false);

  const toggle = () => {
    toggleContainer(!isContainerActive);
  };
  return (
    <div className="rcb-app">
      <Provider store={store}>
        {isContainerActive && (
          <Container
            autofocus={autofocus}
            title={title}
            messagePlaceHolder={messagePlaceHolder}
            toggleContainer={toggle}
            typingGif={typingGif}
            titleAvatar={titleAvatar}
            chatAvatar={chatAvatar}
            handleUserInput={handleUserInput}
          />
        )}
        <Launcher
          initialResponse={initialResponse}
          launcherIcon={launcherIcon}
          isContainerActive={isContainerActive}
          toggleContainer={toggle}
        />
      </Provider>
    </div>
  );
}

export default App;
