import { calendarsConstants } from "./constants";

const initialCalendarsState = { userId: null, calendars: {} };

export default function calendarsReducer(
  state = initialCalendarsState,
  action
) {
  console.log(action.calendars);
  switch (action.type) {
    case calendarsConstants.GET_USER_CALENDARS:
      return {
        ...state,
        userId: action.id,
      };
    case calendarsConstants.SET_CALENDARS:
      return {
        calendars: action.calendars,
      };
    default:
      return state;
  }
}
