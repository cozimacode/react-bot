import ActionTypes from "../actions/actionTypes";

const initialState = {
  conversationData: [],
};

export const convReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          { type: action.type, text: action.payload, id: action.id },
        ],
      };

    case ActionTypes.BOT:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          { type: action.type, text: action.payload, id: action.id },
        ],
      };

    case ActionTypes.CUSTOM:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          {
            type: action.type,
            custom: action.payload,
            id: action.id,
            avatar: action.avatar,
          },
        ],
      };

    case ActionTypes.TYPING:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          { type: action.type, id: action.id },
        ],
      };

    default:
      return state;
  }
};
