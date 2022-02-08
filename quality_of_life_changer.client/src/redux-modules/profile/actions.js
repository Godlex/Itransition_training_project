import { profileConstants } from "./constants";

export function getUserCalendars(id) {
  return { type: profileConstants.GET_USER_CALENDARS, id };
}
export function setCalendars(calendars) {
  console.log(calendars);
  return {
    type: profileConstants.SET_CALENDARS,
    calendars: calendars,
  };
}
