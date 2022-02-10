import { userProfileConstants } from "./constants";

export function getUserCalendars(id) {
  return { type: userProfileConstants.GET_USER_CALENDARS, id };
}
export function setCalendars(calendars) {
  return {
    type: userProfileConstants.SET_CALENDARS,
    calendars: calendars,
  };
}
