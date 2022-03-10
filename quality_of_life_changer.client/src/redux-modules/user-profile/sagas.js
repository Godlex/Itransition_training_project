import { put, takeEvery } from "redux-saga/effects";
import { userProfileConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";

function* fetchUserCalendars({ id }) {
  try {
    const { data } = yield fetcher.get(`api/user/${id}/profile/calendars`);
    yield put(actions.setCalendars(data.calendars));
  } catch (error) {
    if (!error.response) {
      yield toastr.error("server is not available");
    } else {
      yield toastr.error("Error", error.response.data.Message);
    }
  }
}

function* fetchDeleteCalendar({ userId, calendarId }) {
  try {
    yield fetcher.delete(`api/user/${userId}/profile/calendars/${calendarId}`);
    yield toastr.info("Deleted");
    yield put(actions.getUserCalendars(userId));
  } catch (error) {
    if (!error.response) {
      yield toastr.error("server is not available");
    } else {
      yield toastr.error("Error", error.response.data.Message);
    }
  }
}

function* copyUrl({ url }) {
  yield navigator.clipboard.writeText(url);
  yield toastr.info("Copied", url);
}

function* userProfileSaga() {
  yield takeEvery(userProfileConstants.GET_USER_CALENDARS, fetchUserCalendars);
  yield takeEvery(userProfileConstants.DELETE_CALENDAR, fetchDeleteCalendar);
  yield takeEvery(userProfileConstants.COPY_URL, copyUrl);
}

export default userProfileSaga;
