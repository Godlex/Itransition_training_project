import { userProfileConstants } from "./constants";

const initialProfileState = {
  userId: null,
  calendarAdd: {
    name: null,
    url: null,
  },
  calendars: {},
};

export default function calendarsReducer(state = initialProfileState, action) {
  console.log(action.type);
  switch (action.type) {
    case userProfileConstants.GET_USER_CALENDARS:
      return {
        ...state,
        userId: action.id,
      };
    case userProfileConstants.SET_USER_CALENDARS:
      return {
        ...state,
        calendars: action.calendars,
      };
    case userProfileConstants.ADD_CALENDAR:
      return {
        ...state,
        calendarAdd: { name: action.name, url: action.url },
      };
    default:
      return state;
  }
}
