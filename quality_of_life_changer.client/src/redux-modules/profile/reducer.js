import { profileConstants } from "./constants";

const initialProfileState = { userId: null, calendars: {} };

export default function calendarsReducer(state = initialProfileState, action) {
  console.log(action.calendars);
  switch (action.type) {
    case profileConstants.GET_USER_CALENDARS:
      return {
        ...state,
        userId: action.id,
      };
    case profileConstants.SET_CALENDARS:
      return {
        ...state,
        calendars: action.calendars,
      };
    default:
      return state;
  }
}
