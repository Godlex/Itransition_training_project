import { userProfileConstants } from "./constants";

const initialProfileState = {
  calendars: {},
};

export default function calendarsReducer(state = initialProfileState, action) {
  switch (action.type) {
    case userProfileConstants.SET_USER_CALENDARS:
      return {
        ...state,
        calendars: action.calendars,
      };
    default:
      return state;
  }
}
