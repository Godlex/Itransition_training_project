import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import calendarsReducer from "./calendars/reducer";
import eventsReducer from "./events/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  calendars: calendarsReducer,
});

export default rootReducer;
