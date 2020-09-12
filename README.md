# ReactBot

## Features at a glance

- Responsive, user friendly chat interface
- Totally customizable
- Extremely low learning curve
- Lightweight

## Demonstration

![demo](./demo/react-bot-demo.gif)

[Fork our repository](https://github.com/naser-baig-au4/react-bot "Fork our repository") if you'd like to play with the demo.

## Installation

#### npm

```bash
npm install @cozimacode/react-bot
```

#### yarn

```bash
yarn add @cozimacode/react-bot
```

#### UNPKG

```html
<script src="https://unpkg.com/@cozimacode/react-bot"></script>
```

You can access it via window.ReactBot

## Usage

1- Import the ReactBot component in your app and pass the mandatory `handleUserInput` prop that accepts a function to process the user input.

```js
import React from 'react';
import { ReactBot } from '@cozimacode/react-bot';

function Demo() {
  const handleUserInput = (input) => {
    //You can send this message to the backend or mock a response
  };

  render() {
    return (
      <ReactBot
        handleUserInput={this.handleUserInput}
      />
    );
  }
}

export default Demo;
```

2- Import the `addBotMessage` method to add a plain text bot response.

```js
import React from 'react';
import { ReactBot, addBotMessage } from '@cozimacode/react-bot';

function Demo() {
  const handleUserInput = (input) => {
    if (input.indexOf("Hi") > -1) {
        addBotMessage("Hi there!")
    }
  };

  render() {
    return (
      <ReactBot
        handleUserInput={this.handleUserInput}
      />
    );
  }
}

export default Demo;
```

3- You are in the driver's seat when it comes to customization. You can set an initial response, change the title, the launch icon, the avatar etc. See [Props](#props "Props") below for all available customizations.

```js
import React from 'react';
import { ReactBot } from '@cozimacode/react-bot';
import launcherIcon from './launcherIcon.png';

function Demo() {
    const handleUserInput = (input) => {
    ...
  };

  render() {
    return (
      <ReactBot
        handleUserInput={this.handleUserInput}
        customLauncherIcon={launcherIcon}
        title="ReactBot"
        messagePlaceHolder="Type something here..."
      />
    );
  }
}

export default Demo;

```

## Props

| prop                   | type                    | required | default value     | description                                                                                                                       |
| ---------------------- | ----------------------- | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **handleUserInput**    | (...args: any[]) => any | YES      |                   | Accepts a function that processes the user input. The first argument is mandatory as it depicts the input.                        |
| **initialResponse**    | object                  | NO       |                   | Accepts an object with keys Component, props and avatar, just like `addCustomResponse` method. Use it to show a default response. |
| **title**              | string                  | NO       | Hi, there!        | Title for the chat widget.                                                                                                        |
| **messagePlaceHolder** | string                  | NO       | Type a message... | Placeholder for input.                                                                                                            |
| **chatAvatar**         | string                  | NO       |                   | The chat avatar for the bot response.                                                                                             |
| **titleAvatar**        | string                  | NO       |                   | The picture that will be shown before the title in header.                                                                        |
| **autofocus**          | boolean                 | NO       | true              | Focuses on the input field on launch.                                                                                             |
| **customLauncherIcon** | string                  | NO       |                   | Change the default launcher icon/image.                                                                                           |
| **typingGif**          | string                  | NO       |                   | Show a different gif/png for typing indicator.                                                                                    |

## Overriding Styles

Feel free to create a custom CSS stylesheet and override the default CSS classes to match your overall app design. All styles are prefixed with `rcb-` to avoid any conflicts.

```css
.rcb-bot-message {
  background-color: #afd2ff;
}

.rcb-user-message {
  background-color: #c53658;
}
```

## Methods

- **addBotMessage**
  You can use this method to simulate a response from the bot after processing the user input through the backend. This accepts plain text values.

- **addUserMessage**
  This method can be used to add a message as a user without invoking the `handleUserInput` function.

- **addCustomComponent**
  This is used to add any custom React component. It accepts an object with the component class, props for it (if any) and an optional boolean to show/hide the chat avatar.
  ```js
  addCustomComponent({
    Component: CustomReactComponent,
    props: { propOne: value, propTwo: value },
    avatar: true,
  });
  ```
- **displayTypingEffect**
  This method can be used to display the typing indicator. Ideally it should be called before sending the user input to backend.

- **hideTypingEffect**
  This method can be used to hide the typing indicator. Ideally it should be called after a response is received from the backend.

Example:

```js
import React from 'react';
import { ReactBot, displayTypingEffect, hideTypingEffect, addBotMessage } from '@cozimacode/react-bot';

function Demo() {
    const handleUserInput = (input) => {
	displayTypingEffect();
    const message = "some response from backend"
	addBotMessage(message);
	hideTypingEffect();
  };
};

  render() {
    return (
      <ReactBot
        handleUserInput={this.handleUserInput}
      />
    );
  }
}

export default Demo;

```

## Need further customization?

You are more than welcome to [fork our code repository](https://github.com/naser-baig-au4/react-bot "fork our code repository") and make any changes or add any custom features as you please. If you feel like sharing your work with the community, then we'd love for you to [contribute to this project](https://github.com/naser-baig-au4/react-bot/blob/master/CONTRIBUTING.md "contribute to this project").

## About

This project is written and maintained by [Naser Baig](https://github.com/naser-baig-au4).

I am always looking for exciting projects to work on. If you happen to be working on one of them and need a frontend engineer, then [let's connect](https://www.linkedin.com/in/nasermohdbaig/ "let's connect").
