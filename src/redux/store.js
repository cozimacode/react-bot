import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer.js";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export { store };
