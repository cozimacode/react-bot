import { addBotMessage, addCustomComponent } from "../../dist";
import CustomResponse from "./response-utils";

async function mockAPIResponse(message, botId = "default") {
  switch (message.toLowerCase()) {
    case "hi, who is this?":
      await addBotMessage(
        botId === "bot1"
          ? "I am Rebecca, one of multiple bot twins. We maintain separate state, are totally customizable and can be displayed on the same page."
          : "I am Mia, one of multiple bot twins. We maintain separate state, are totally customizable and can be displayed on the same page.",
        botId
      );
      break;
    case "who is your developer?":
      await addBotMessage(
        "I am developed and maintained by Naser Baig.",
        botId
      );
      break;
    case "cool":
      await addBotMessage("Indeed!", botId);
      break;
    case "custom":
      await addCustomComponent(
        {
          Component: CustomResponse,
          props: { id: 1, name: "Naser" },
        },
        botId
      );
      break;
    case "thank you":
      await addBotMessage("You're welcome. Have a nice day!", botId);
      break;
    default:
      break;
  }
}

export { mockAPIResponse };
