import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import userProfileReducer from "./user-profile/reducer";
import calendarsReducer from "./calendars/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  auth: authReducer,
  calendars: calendarsReducer,
  userProfile: userProfileReducer,
  toastr: toastrReducer,
});

export default rootReducer;
