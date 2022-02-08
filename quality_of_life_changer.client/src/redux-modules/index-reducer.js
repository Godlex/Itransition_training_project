import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import eventsReducer from "./events/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  profile: profileReducer,
  toastr: toastrReducer,
});

export default rootReducer;
