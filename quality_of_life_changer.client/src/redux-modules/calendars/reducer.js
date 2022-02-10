import { calendarsConstants } from "./constants";

const initialCalendarsState = {};

export default function eventsReducer(state = initialCalendarsState, action) {
  switch (action.type) {
    case calendarsConstants.GET_TODAY_EVENTS:
      return {
        ...state,
      };
    case calendarsConstants.SET_TODAY_EVENTS:
      return {
        ...state,
        ...action.todayEvents,
      };
    default:
      return state;
  }
}
