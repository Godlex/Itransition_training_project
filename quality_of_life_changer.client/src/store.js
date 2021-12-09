import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./redux-modules/index-reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./redux-modules/index-sagas";

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(logger,sagaMiddleware));

sagaMiddleware.run(rootSaga);