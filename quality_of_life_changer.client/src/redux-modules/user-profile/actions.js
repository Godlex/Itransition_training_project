import { userProfileConstants } from "./constants";

export function addCalendar(name, url) {
  return { type: userProfileConstants.ADD_CALENDAR, name, url };
}
export function getUserCalendars(id) {
  return { type: userProfileConstants.GET_USER_CALENDARS, id };
}
export function setCalendars(calendars) {
  return {
    type: userProfileConstants.SET_USER_CALENDARS,
    calendars: calendars,
  };
}
