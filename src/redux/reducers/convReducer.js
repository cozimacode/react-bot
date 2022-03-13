import ActionTypes from "../actions/actionTypes";

// const initialState = {
//   conversationData: [],
// };

const initialState = {};

export const convReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return {
        ...state,
        [action.id]: {
          conversationData: [],
        },
      };
    case ActionTypes.USER:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          { type: action.type, payload: action.payload, id: action.id },
        ],
      };

    case ActionTypes.BOT:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          { type: action.type, payload: action.payload, id: action.id },
        ],
      };

    case ActionTypes.CUSTOM:
      return {
        ...state,
        conversationData: [
          ...state.conversationData,
          {
            type: action.type,
            props: action.props,
            payload: action.payload,
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
