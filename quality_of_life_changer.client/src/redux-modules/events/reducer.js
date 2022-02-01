import { eventsConstants } from "./constants";

const initialEventsState = [];

export default function eventsReducer(state = initialEventsState, action) {
  switch (action.type) {
    case eventsConstants.GET_TODAY_EVENTS:
      return {
        ...state,
      };
    case eventsConstants.SET_EVENTS:
      return {
        ...action.events,
      };
    default:
      return state;
  }
}
