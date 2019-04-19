import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducers from "../reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

export default store;
