import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import eventsReducer from "./events/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  profile: profileReducer,
});

export default rootReducer;
