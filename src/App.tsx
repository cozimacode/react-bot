import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { FunctionComponent, useState, useCallback } from "react";
import { MainProps } from "./ReactBot";
import Launcher from "./coreComponents/Launcher";
import Container from "./coreComponents/Container";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

interface AppProps extends MainProps {
  launcherIcon: string | boolean;
}

export const App: FunctionComponent<AppProps> = ({
  launcherIcon,
  title,
  messagePlaceHolder,
  autofocus,
  initialResponse,
  typingGif,
  titleAvatar,
  chatAvatar,
  handleUserInput,
}) => {
  let [isContainerActive, toggleContainer] = useState(false);

  const toggle = useCallback(() => {
    toggleContainer(!isContainerActive);
  }, [isContainerActive]);

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
};
