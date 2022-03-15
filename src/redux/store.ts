import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export { store };
