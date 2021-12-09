import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./redux-modules/index-reducer";

export let store = createStore(reducer, applyMiddleware(logger));
