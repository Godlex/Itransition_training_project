import { calendarsConstants } from "./constants";

export function getTodayEvents() {
  return {
    type: calendarsConstants.GET_TODAY_EVENTS,
  };
}

export function setEvents(todayEvents) {
  return {
    type: calendarsConstants.SET_TODAY_EVENTS,
    todayEvents: { todayEvents },
  };
}
