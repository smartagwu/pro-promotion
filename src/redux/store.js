import { createStore } from "redux";
import enhancer from "./enhancer"
import rootReducer from "./reducers"

const store = createStore(rootReducer, undefined, enhancer);

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
}

export default store;