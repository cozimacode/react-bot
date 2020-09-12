import { addBotMessage, addCustomComponent } from "../../src";
import CustomResponse from "./response-utils";

async function mockAPIResponse(message) {
  switch (message.toLowerCase()) {
    case "hi, who is this?":
      await addBotMessage(
        "I am ReactBot, a responsive, flexible and totally customizable Chat Widget for React Apps"
      );
      break;
    case "who is your developer?":
      await addBotMessage("I am developed and maintained by Naser Baig.");
      break;
    case "cool":
      await addBotMessage("Indeed!");
      break;
    case "custom":
      await addCustomComponent({
        Component: CustomResponse,
        props: { id: 1, name: "Naser" },
      });
      break;
    case "thank you":
      await addBotMessage("You're welcome. Have a nice day!");
      break;
    default:
      break;
  }
}

export { mockAPIResponse };
