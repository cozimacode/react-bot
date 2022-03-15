import { Conversation } from "../../coreComponents/ConversationUI";
import ActionTypes from "../actions/actionTypes";

const initialState: Record<string, Record<string, Array<Conversation>>> = {};

export interface ActionType extends Omit<Conversation, "id"> {
  id?: string;
  botId: string;
}

export const convReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return {
        ...state,
        [action.botId]: {
          conversationData: [],
        },
      };
    case ActionTypes.USER:
      return {
        ...state,
        [action.botId]: {
          conversationData: [
            ...state[action.botId].conversationData,
            { type: action.type, payload: action.payload, id: action.id },
          ],
        },
      };

    case ActionTypes.BOT:
      return {
        ...state,
        [action.botId]: {
          conversationData: [
            ...state[action.botId].conversationData,
            { type: action.type, payload: action.payload, id: action.id },
          ],
        },
      };

    case ActionTypes.CUSTOM:
      return {
        ...state,
        [action.botId]: {
          conversationData: [
            ...state[action.botId].conversationData,
            {
              type: action.type,
              props: action.props,
              payload: action.payload,
              id: action.id,
              avatar: action.avatar,
            },
          ],
        },
      };

    case ActionTypes.TYPING:
      return {
        ...state,
        [action.botId]: {
          conversationData: [
            ...state[action.botId].conversationData,
            { type: action.type, id: action.id },
          ],
        },
      };

    case ActionTypes.HIDETYPING:
      return {
        ...state,
        [action.botId]: {
          conversationData: state[action.botId].conversationData.filter(
            (conversation) => conversation.type !== ActionTypes.TYPING
          ),
        },
      };

    default:
      return state;
  }
};
