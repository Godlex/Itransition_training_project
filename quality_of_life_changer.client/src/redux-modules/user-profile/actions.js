import { userProfileConstants } from "./constants";

export function getUserCalendars(id) {
  return { type: userProfileConstants.GET_USER_CALENDARS, id };
}
export function setCalendars(calendars) {
  return {
    type: userProfileConstants.SET_USER_CALENDARS,
    calendars: calendars,
  };
}

export function deleteCalendar(userId, calendarId) {
  return {
    type: userProfileConstants.DELETE_CALENDAR,
    userId: userId,
    calendarId: calendarId,
  };
}

export function copyUrl(url) {
  return {
    type: userProfileConstants.COPY_CALENDAR_URL,
    url: url,
  };
}
