import { calendarsConstants } from "./constants";

export function getUserCalendars(id) {
  return { type: calendarsConstants.GET_USER_CALENDARS, id };
}
export function setCalendars(calendars) {
  console.log(calendars);
  return {
    type: calendarsConstants.SET_CALENDARS,
    calendars: calendars,
  };
}
