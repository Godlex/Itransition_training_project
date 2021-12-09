import { combineReducers } from "redux";
import { registerReducer, authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
});

export default rootReducer;
