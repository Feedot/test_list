import { createStore, compose } from "redux";

import reducers from "./reducers/index";
import middleware from './middleware/index'

const initialState = {items:[], comments:[]};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(middleware, ...enhancers);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
