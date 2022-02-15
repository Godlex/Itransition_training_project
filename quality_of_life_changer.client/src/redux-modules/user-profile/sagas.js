import { put, takeEvery } from "redux-saga/effects";
import { userProfileConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";
import { constants } from "../../constants/constants";

function* fetchUserCalendars({ id }) {
  try {
    toastr.info("Wait server response");
    const { data } = yield fetcher.get(
      `"api/user/",${id},"/profile/calendars"`
    );
    toastr.success("Your calendars loaded");
    yield put(actions.setCalendars(data.calendars));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.response.data.Message);
  }
}

function* fetchCalendarStatus({ name, url }) {
  try {
    toastr.info("Wait server response");
    const token = localStorage.getItem(constants.JWT_TOKEN);
    const tokenPayload = JSON.parse(window.atob(token.split(".")[1]));
    const id = tokenPayload.nameid;
    const { data } = yield fetcher.post(
      `"api/user/",${id},"/profile/calendars"`,
      {
        name: name,
        url: url,
      }
    );
    toastr.success("Your calendar is add");
    yield put(actions.setCalendars(data.calendars));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.response.data.Message);
  }
}

function* userProfileSaga() {
  yield takeEvery(userProfileConstants.GET_USER_CALENDARS, fetchUserCalendars);
  yield takeEvery(userProfileConstants.ADD_CALENDAR, fetchCalendarStatus);
}

export default userProfileSaga;
