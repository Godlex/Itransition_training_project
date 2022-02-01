import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import eventsReducer from "./events/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
});

export default rootReducer;
