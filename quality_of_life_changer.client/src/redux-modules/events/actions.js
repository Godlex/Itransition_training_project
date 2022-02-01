import { eventsConstants } from "./constants";

export function getTodayEvents() {
  return {
    type: eventsConstants.GET_TODAY_EVENTS,
  };
}

export function setEvents(events) {
  return {
    type: eventsConstants.SET_EVENTS,
    events: { events },
  };
}
