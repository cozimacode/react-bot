import { combineReducers } from "redux";
import { convReducer } from "./convReducer";

const rootReducer = combineReducers({
  convReducer,
});

export default rootReducer;
