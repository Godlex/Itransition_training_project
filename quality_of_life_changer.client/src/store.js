import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./redux-modules/index-reducer";

const logger = createLogger();

export default createStore(reducer, applyMiddleware(logger));
